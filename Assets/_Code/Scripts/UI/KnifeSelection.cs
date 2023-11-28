using UnityEngine;
using UnityEngine.UI;

public class KnifeSelection : MonoBehaviour
{
    public Image currKnifeImg;

    public Sprite[] knivesList;

    public KnifeController knifeController;

    public int currIndex = 0;

    private void Awake()
    {
        currIndex = PlayerPrefs.GetInt("SelectedKnife", currIndex);
    }
    private void Start()
    {
        GameManager.Instance.OnGameStartEvent += GameStarted;
        currKnifeImg.sprite = knivesList[currIndex];

        knifeController.ChangeKnife(currKnifeImg.sprite);
    }
    public void GameStarted()
    {
        knifeController.ChangeKnife(currKnifeImg.sprite);
    }

    public void OnClick_NextKnife()
    {
        currIndex++;
        if (currIndex >= knivesList.Length)
        {
            currIndex = 0;
        }
        currKnifeImg.sprite = knivesList[currIndex];
        knifeController.ChangeKnife(currKnifeImg.sprite);
    }
    public void OnClick_PrevKnife()
    {
        currIndex--;
        if (currIndex < 0)
        {
            currIndex = knivesList.Length - 1;
        }
        currKnifeImg.sprite = knivesList[currIndex];
        knifeController.ChangeKnife(currKnifeImg.sprite);
    }


    private void OnDisable()
    {
        PlayerPrefs.SetInt("SelectedKnife", currIndex);
    }
}
