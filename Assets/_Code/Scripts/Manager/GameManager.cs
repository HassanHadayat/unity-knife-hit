using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public delegate void GameStartEvent();
    public GameOverEvent OnGameStartEvent;

    public delegate void GameOverEvent();
    public GameOverEvent OnGameOverEvent;

    public Score playerScore;

    private void Awake()
    {
        Application.targetFrameRate = 120;
        if (Instance != null && Instance != this)
        {
            Destroy(this.gameObject);
        }
        else
        {
            Instance = this;
        }
    }
    public void StartGame()
    {
        // Resume the Time
        Time.timeScale = 1f;

        playerScore = new Score(1, 0);
        
        OnGameStartEvent?.Invoke();
    }
    public void GameOver()
    {
        // Pause the Time
        Time.timeScale = 0f;

        OnGameOverEvent?.Invoke();
    }

    public void UpdateScore()
    {
        playerScore.Points++;

        UIManager.Instance.UpdateGamePlayStats();
    }
    public void UpdateStage()
    {
        playerScore.Stage++;

        UIManager.Instance.UpdateGamePlayStats();
    }
}
