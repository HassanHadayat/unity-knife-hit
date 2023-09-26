using TMPro;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;

    [SerializeField] GameObject gameStartPanel;
    [SerializeField] GameObject gamePlayPanel;
    [SerializeField] GameObject gameOverPanel;

    public TextMeshProUGUI gamePlayPointsText;
    public TextMeshProUGUI gamePlayStageText;

    [SerializeField] TextMeshProUGUI gameOverPointsText;
    [SerializeField] TextMeshProUGUI gameOverStageText;
    [SerializeField] TextMeshProUGUI gameOverHighestScoreText;
    [SerializeField] GameObject gameOverCrownImg;

    [SerializeField] TextMeshProUGUI highestScoreText;


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
        gamePlayPointsText.text = "0";
        gamePlayStageText.text = "STAGE 1";

        gamePlayPanel.SetActive(true);
        gameStartPanel.SetActive(false);
        gameOverPanel.SetActive(false);

    }
    public void GameOver()
    {
        // Set Game Over Stats
        UpdateGameOverStats();

        gameOverPanel.SetActive(true);
        gameStartPanel.SetActive(false);
        gamePlayPanel.SetActive(false);
    }

    public void UpdateGameStartStats(int stage, int points)
    {
        highestScoreText.text = "Stage " + stage.ToString() + "  x  Points " + points.ToString();
    }
    public void UpdateGamePlayStats()
    {
        gamePlayStageText.text = "STAGE " + GameManager.Instance.playerScore.Stage.ToString();
        gamePlayPointsText.text = GameManager.Instance.playerScore.Points.ToString();
    }
    public void UpdateGameOverStats()
    {

        if(GameManager.Instance.playerScore >= PlayerData.Instance.HighestScore) 
        { 
            gameOverCrownImg.SetActive(true);
        }
        else
        {
            gameOverCrownImg.SetActive(false);
        }

        gameOverHighestScoreText.text = "Stage " + PlayerData.Instance.HighestScore.Stage.ToString() + "  x  Points " + PlayerData.Instance.HighestScore.Points.ToString();

        gameOverStageText.text = "STAGE " + GameManager.Instance.playerScore.Stage.ToString();
        gameOverPointsText.text = GameManager.Instance.playerScore.Points.ToString();
    }

    public void OnClick_PlayBtn()
    {
        GameManager.Instance.StartGame();
    }

    public void OnClick_ResetBtn()
    {
        GameManager.Instance.StartGame();
    }
    public void OnClick_HomeBtn()
    {
        // Destroy Log
        UpdateGameStartStats(PlayerData.Instance.HighestScore.Stage, PlayerData.Instance.HighestScore.Points);

        StageManager.Instance.DestroyLog();

        gameStartPanel.SetActive(true);
        gamePlayPanel.SetActive(false);
        gameOverPanel.SetActive(false);
    }
}
