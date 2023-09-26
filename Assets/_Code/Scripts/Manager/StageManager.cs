using System.Collections;
using UnityEngine;

public class StageManager : MonoBehaviour
{
    public static StageManager Instance;

    public KnifeController knifeController;

    private GameObject log;
    public GameObject logPrefab;
    public Vector3 logPos;
    public Transform logTrans;


    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(this.gameObject);
        }
        else
        {
            Instance = this;
        }
    }

    private void Start()
    {
        GameManager.Instance.OnGameStartEvent += SetupStage;
        GameManager.Instance.OnGameOverEvent += CleanStage;
    }


    public void SetupStage()
    {
        if (!log)
        {
            log = Instantiate(logPrefab, logTrans);
            //log.transform.position = logPos;
        }

        Invoke("LogInstantiateDelay", 0.15f);
    }
    private void LogInstantiateDelay()
    {
        knifeController.Setup((6 + GameManager.Instance.playerScore.Stage));
        log.GetComponent<Log>().SetKnivesSprite(knifeController.CurrKnifeSprite);
    }

    public void CleanStage()
    {
        // Reset Knives
        knifeController.ResetKnivesPool();

    }

    public void NextStage()
    {
        GameManager.Instance.UpdateStage();

        CleanStage();
        log.GetComponent<Log>().Explode();

        Invoke("SetupStage", 1f);
    }
    public void DestroyLog()
    {
        if (log)
            Destroy(log);
    }
}
