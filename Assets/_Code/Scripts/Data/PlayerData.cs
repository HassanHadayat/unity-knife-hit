using UnityEngine;

public class PlayerData : MonoBehaviour
{
    public static PlayerData Instance;


    private Score m_highestScore;

    public Score HighestScore
    {
        get { return m_highestScore; }
        set
        {
            if (value.Points >= 0 && value.Points > m_highestScore.Points)
            {
                m_highestScore = value;
                PlayerPrefs.SetInt("Stage", value.Stage);
                PlayerPrefs.SetInt("Points", value.Points);
            }
        }
    }


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

        m_highestScore = new Score(PlayerPrefs.GetInt("Stage", 1), PlayerPrefs.GetInt("Points", 0));
    }
    private void Start()
    {
        UIManager.Instance.UpdateGameStartStats(HighestScore.Stage, HighestScore.Points);
    }

}

public struct Score
{
    public int Stage;
    public int Points;

    public Score(int stage, int points)
    {
        Stage = stage;
        Points = points;
    }

    // Overload the >= operator
    public static bool operator >=(Score score1, Score score2)
    {
        return score1.Points >= score2.Points;
    }

    // Overload the <= operator
    public static bool operator <=(Score score1, Score score2)
    {
        return !(score1 >= score2);
    }
}
