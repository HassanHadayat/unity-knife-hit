using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public delegate void GameStartEvent();
    public GameOverEvent OnGameStartEvent;

    public delegate void GameOverEvent();
    public GameOverEvent OnGameOverEvent;

    public int stage = 1;
    public int score;


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
    public void StartGame()
    {
        // Resume the Time
        Time.timeScale = 1f;

        stage= 1;
        score= 0;
        
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
        score++;
        UIManager.Instance.gamePlayScoreText.text = score.ToString();
    }
}
