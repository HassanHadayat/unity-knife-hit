using UnityEngine;
using UnityEngine.SocialPlatforms.Impl;

public class StageManager : MonoBehaviour
{
    public static StageManager Instance;

    public KnifeController knifeController;

    private GameObject log;
    public GameObject logPrefab;
    public Vector3 logPos;


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
            log = Instantiate(logPrefab);
            log.transform.position = logPos;
        }
        knifeController.Setup((6 + GameManager.Instance.stage));
    }


    public void CleanStage()
    {
        // Reset Knives
        knifeController.ResetKnivesPool();

        // Destroy Log
        Destroy(log);
    }

    public void NextStage()
    {
        GameManager.Instance.stage++;
        UIManager.Instance.gamePlayStageText.text = "Stage "+GameManager.Instance.stage.ToString();

        //CleanStage();

        SetupStage();
    }
}
