using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class PlayableAdManager : MonoBehaviour
{
    public static PlayableAdManager Instance;

    public Log log;
    public SpriteRenderer backgroundImg;
    public Sprite backgroundSprite;
    public Image gameIconImg;
    public Sprite gameIconSprite;
    [SerializeField] private Image gameEndPanelImg;
    [SerializeField] private Button installBtn;
    [SerializeField] private TextMeshProUGUI installBtnTMP;
    [SerializeField] private TextMeshProUGUI gameNameTMP;

    public GameObject clickUI;
    public Animator gameEndPanelAimController;
    public Animator installBtnAnimController;

    public KnifeController knifeController;
    private int knifeShootCount;
    private bool _gameEnded;


    [Header("Panels")]
    [SerializeField] private GameObject gamePlayPanel;
    [SerializeField] private GameObject gameEndPanel;


    [Header("Playable Ad Settings")]

    [LunaPlaygroundAsset("Panel Color", 0, "Game End Panel")]
    public Color gameEndPanelColor;

    [LunaPlaygroundField("Game Name Text", 1, "Game End Panel")]
    public string gameNameText;

    [LunaPlaygroundField("Game Name Text Color", 1, "Game End Panel")]
    public Color gameNameTextColor;

    [LunaPlaygroundField("Install Button Color", 1, "Game End Panel")]
    public Color installBtnColor;

    [LunaPlaygroundField("Install Button Text", 1, "Game End Panel")]
    public string installBtnText;
    
    [LunaPlaygroundField("Install Button Text Color", 1, "Game End Panel")]
    public Color installBtnTextColor;
    
    [LunaPlaygroundField("Game URL", 1, "Game End Panel")]
    public string url;



    private void Awake()
    {
        if (Instance == null)
            Instance = this;
    }
    private void Start()
    {
        Luna.Unity.LifeCycle.OnResume += Resume;
        Luna.Unity.LifeCycle.OnPause += Pause;

        backgroundImg.sprite = backgroundSprite;
        gameIconImg.sprite = gameIconSprite;

        gameEndPanelImg.color = gameEndPanelColor;
        installBtn.image.color = installBtnColor;
        installBtnTMP.text = installBtnText;
        installBtnTMP.color = installBtnTextColor;

        gameNameTMP.text = gameNameText;
        gameNameTMP.color = gameNameTextColor;

        knifeShootCount = 0;
        knifeController.Setup((3));
    }
    public void ShowClickUI()
    {
        Invoke("DelayShowClickUI", 1.5f);
        //Invoke("HideClickUI", 5f);
    }
    private void DelayShowClickUI()
    {
        if (!_gameEnded)
            clickUI.SetActive(true);
    }
    public void HideClickUI()
    {
        Invoke("DelayHideClickUI", 0.25f);
        //clickUI.SetActive(false);
    }
    private void DelayHideClickUI()
    {
        clickUI.SetActive(false);
    }
    public void ShootedKnife()
    {
        if (!_gameEnded)
        {
            knifeShootCount++;
            Luna.Unity.Analytics.LogEvent("knife shooted", knifeShootCount);
        }
    }



    private void Resume()
    {
        Time.timeScale = 1;
    }

    private void Pause()
    {
        Time.timeScale = 0;
    }


    public void ShowEndPanel()
    {
        Pause();
        clickUI.SetActive(false);
        gameEndPanel.SetActive(true);
        gameEndPanelAimController.Play("GameEndPanelAnim");
        installBtnAnimController.Play("InstallPopAnim");
        //Invoke("PlayInstallBtnAnim", 1f);
    }
    public void PlayInstallBtnAnim()
    {
    }
    public void GameWon()
    {
        log.Explode();
        Invoke("EndGame", 1f);
    }
    public void EndGame()
    {
        ShowEndPanel();
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame();

        if (!_gameEnded)
        {
            //Uncomment these when Luna is installed
            Luna.Unity.LifeCycle.GameEnded();
            _gameEnded = true;
        }
    }

    public void InstallGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame("", url);
        Application.OpenURL(url);
    }

    private void OnDisable()
    {
        Destroy(this);
    }
}
