using UnityEngine;
using UnityEngine.UI;

public class KnifeController : MonoBehaviour
{
    public GameObject Knife;

    public GameObject KnifePrefab;

    public GameObject availableKnivesList;
    public GameObject availableKnifeUIPrefab;
    public GameObject[] availableKnives;
    public Color usedKnifeColor;
    public int currKnifeIndex = 0;

    private void Start()
    {
        int availableKnivesCount = 7;
        availableKnives = new GameObject[availableKnivesCount];

        for (int i = 0; i < availableKnivesCount; i++)
        {
            availableKnives[i] = Instantiate(availableKnifeUIPrefab, availableKnivesList.transform, false);
            currKnifeIndex++;
        }

        InstantiateKnife();
        //Knife = Instantiate(KnifePrefab, this.transform);

    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (Knife != null)
            {
                Knife.GetComponent<Knife>().Shoot();
                Knife = null;

                currKnifeIndex--;
                availableKnives[currKnifeIndex].GetComponent<Image>().color = usedKnifeColor;
                if (currKnifeIndex > 0)
                {
                    Invoke("InstantiateKnife", 0.1f);
                }
            }
        }
    }
    public void InstantiateKnife()
    {
        Knife = Instantiate(KnifePrefab, this.transform);
    }
}
