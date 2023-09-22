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
        SetKnife();
    }

    public void OnClick_NextKnife()
    {
        currIndex++;
        if (currIndex >= knivesList.Length)
        {
            currIndex = 0;
        }
        SetKnife();
    }
    public void OnClick_PrevKnife()
    {
        currIndex--;
        if (currIndex < 0)
        {
            currIndex = knivesList.Length - 1;
        }
        SetKnife();
    }

    public void SetKnife()
    {
        currKnifeImg.sprite = knivesList[currIndex];
        knifeController.ChangeKnife(currKnifeImg.sprite);

        PlayerPrefs.SetInt("SelectedKnife", currIndex);
    }
}
