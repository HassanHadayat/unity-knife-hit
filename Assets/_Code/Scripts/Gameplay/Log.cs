using System.Collections;
using UnityEngine;

public class Log : MonoBehaviour
{
    public SpriteRenderer spriteRenderer;

    public float rotateSpeed;
    public float rotateTimer;

    public Vector3 stationaryPos;
    public Vector3 hitPos;

    public Color stationaryColor;
    public Color hitColor;


    private void Start()
    {
        SetRotation();
    }

    private void SetRotation()
    {
        // Set Rotation Timer
        rotateTimer = Random.Range(1f, 10f);
        // Set Rotation Speed
        rotateSpeed = Random.Range(50f, 150f);
        // Set Direction
        rotateSpeed = (Random.Range(0, 2) % 2 == 0) ? rotateSpeed : -rotateSpeed;
    }

    void Update()
    {
        if (rotateTimer <= 0f)
        {
            SetRotation();
            //GetComponent<Rigidbody>().
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
    public void ResetPosition()
    {
        transform.position = stationaryPos;
        spriteRenderer.color = stationaryColor;
    }
}
