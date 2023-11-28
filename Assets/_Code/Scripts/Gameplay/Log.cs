using System.Collections;
using UnityEngine;

public class Log : MonoBehaviour
{
    public SpriteRenderer spriteRenderer;
    public Animator animController;
    public Sprite selectedKnifeSprite;

    public GameObject crackedLog;

    private float rotateSpeed;
    private float rotateTimer;

    public float minRotateTimer;
    public float maxRotateTimer;

    public float minRotateSpeed;
    public float maxRotateSpeed;


    public Vector3 stationaryPos;
    public Vector3 hitPos;

    public Color stationaryColor;
    public Color hitColor;

    private bool isRotating = true;

    private void Start()
    {
        if (animController)
            animController.Play("InstantiateAnim");

        SetRotation();
    }

    private void SetRotation()
    {
        // Set Rotation Timer
        rotateTimer = Random.Range(1f, 10f);
        // Set Rotation Speed
        rotateSpeed = Random.Range(100f, 250f);

        // Set Direction
        rotateSpeed = (Random.Range(0, 2) % 2 == 0) ? rotateSpeed : -rotateSpeed;
    }

    void Update()
    {

        if (!isRotating) { return; }

        if (rotateTimer <= 0.75f)
        {
            if (rotateSpeed > 0)
            {
                rotateSpeed -= rotateSpeed * Time.deltaTime;

            }
            else if (rotateSpeed < 0)
            {
                rotateSpeed -= rotateSpeed * Time.deltaTime;
            }
        }

        if (rotateTimer <= 0f && Mathf.Abs(rotateSpeed) <= 40f)
        {
            SetRotation();
        }
        else
        {
            rotateTimer -= Time.deltaTime;
        }
        transform.Rotate(Vector3.forward, rotateSpeed * Time.deltaTime);
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {

        if (collision.collider.CompareTag("Knife"))
        {
            transform.position = hitPos;
            spriteRenderer.color = hitColor;
            Invoke("ResetPosition", 0.1f);
        }
    }
    public void SetRootMotion()
    {
        animController.applyRootMotion = true;
    }
    public void SetSelectedKnifeSprite(Sprite sprite)
    {
        selectedKnifeSprite = sprite;
    }
    public void ResetPosition()
    {
        transform.position = stationaryPos;
        spriteRenderer.color = stationaryColor;
    }

    public void Explode()
    {
        animController.enabled = false;
        isRotating = false;
        transform.rotation = Quaternion.identity;
        spriteRenderer.enabled = false;

        GameObject crackedLogGO = Instantiate(crackedLog, this.transform);

        if (selectedKnifeSprite != null)
        {
            crackedLogGO.GetComponent<CrackedLog>().Explode(selectedKnifeSprite);

        }

        Invoke("DestroyLog", 1f);
    }
    public void DestroyLog()
    {
        Destroy(gameObject);
    }

}
