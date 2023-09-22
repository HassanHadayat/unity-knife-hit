using UnityEngine;
using UnityEngine.UI;

public class KnifeController : MonoBehaviour
{
    private GameObject knife;
    public GameObject knifePrefab;
    public GameObject[] knivesPool;
    public Transform knivesPoolPos;

    public GameObject availableKnivesList;
    public GameObject availableKnifeUIPrefab;
    public GameObject[] availableKnivesUI;
    public Color usedKnifeColor;
    public int currKnifeIndex = -1;


    private void Start()
    {
        int maxKnivesCount = 20;

        // Initialize
        if (knivesPool == null || knivesPool.Length == 0)
        {
            knivesPool = new GameObject[maxKnivesCount];

            // Instantiate Knives at Knives Pool Pos
            for (int i = 0; i < maxKnivesCount; i++)
            {
                knivesPool[i] = Instantiate(knifePrefab, knivesPoolPos);
                knivesPool[i].GetComponent<Knife>().knifeController = this;
            }
        }

        // Instantiate KnivesUI
        availableKnivesUI = new GameObject[maxKnivesCount];

        currKnifeIndex = -1;
        for (int i = 0; i < maxKnivesCount; i++)
        {
            availableKnivesUI[i] = Instantiate(availableKnifeUIPrefab, availableKnivesList.transform, false);
            availableKnivesUI[i].SetActive(false);
            currKnifeIndex++;
        }
    }
    public void ChangeKnife(Sprite knifeSprite)
    {
        foreach (GameObject knife in knivesPool)
        {
            knife.GetComponent<SpriteRenderer>().sprite = knifeSprite;
        }
    }
    public void ResetKnivesPool()
    {
        foreach (GameObject knife in knivesPool)
        {
            knife.transform.SetParent(this.transform);
            knife.transform.position = transform.position;
            knife.transform.rotation = Quaternion.identity;

            knife.SetActive(false);
        }
    }
    public void Setup(int availableKnivesCount = 7)
    {
        availableKnivesCount = (availableKnivesCount > 20) ? 7 : availableKnivesCount;
        
        // Reset the Knives Pool
        ResetKnivesPool();

        // Reset the Knives UI
        foreach (GameObject knifeUI in availableKnivesUI)
        {
            knifeUI.SetActive(false);
        }


        // Spawn Knives UI
        currKnifeIndex = -1;
        for (int i = 0; i < availableKnivesCount; i++)
        {
            availableKnivesUI[i].SetActive(true);
            availableKnivesUI[i].GetComponent<Image>().color = Color.white;
            currKnifeIndex++;
        }

        // Spawn Knife
        SpawnKnife();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (knife != null)
            {
                ShootKnife();
            }
        }
    }



    public void SpawnKnife()
    {
        if (currKnifeIndex >= 0)
        {
            knife = knivesPool[currKnifeIndex];
            knife.transform.position = transform.position;
            knife.SetActive(true);
        }
        else
        {
            // Stage Completed
            Invoke("KnivesEnd", 0.2f);
        }
    }

    public void ShootKnife()
    {

        knife.GetComponent<Knife>().Shoot();
        knife = null;

        // Set Used Knife UI
        availableKnivesUI[currKnifeIndex].GetComponent<Image>().color = usedKnifeColor;
        currKnifeIndex--;
    }
    public void KnivesEnd()
    {
        StageManager.Instance.NextStage();
    }
}
