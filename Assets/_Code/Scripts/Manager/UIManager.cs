using TMPro;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;

    [SerializeField] GameObject gameStartPanel;
    [SerializeField] GameObject gamePlayPanel;
    [SerializeField] GameObject gameOverPanel;

    public TextMeshProUGUI gamePlayScoreText;
    public TextMeshProUGUI gamePlayStageText;

    [SerializeField] TextMeshProUGUI gameOverScoreText;
    [SerializeField] TextMeshProUGUI gameOverStageText;

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
        GameManager.Instance.OnGameStartEvent += GameStarted;
        GameManager.Instance.OnGameOverEvent += GameOver;

        gameStartPanel.SetActive(true);
        gamePlayPanel.SetActive(false);
        gameOverPanel.SetActive(false);
    }

    public void GameStarted()
    {
        gamePlayScoreText.text = "0";
        gamePlayStageText.text = "STAGE 1";

        gamePlayPanel.SetActive(true);
        gameStartPanel.SetActive(false);
        gameOverPanel.SetActive(false);

    }
    public void GameOver()
    {

        // Set Game Over Stats
        gameOverStageText.text = "STAGE " + GameManager.Instance.stage.ToString();
        gameOverScoreText.text = GameManager.Instance.score.ToString();

        gameOverPanel.SetActive(true);
        gameStartPanel.SetActive(false);
        gamePlayPanel.SetActive(false);
    }


    public void OnClick_PlayBtn()
    {
        GameManager.Instance.StartGame();
    }

    public void OnClick_ResetBtn()
    {
        GameManager.Instance.StartGame();
    }
}
