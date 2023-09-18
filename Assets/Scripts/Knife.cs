using UnityEngine;

public class Knife : MonoBehaviour
{

    public float moveSpeed;
    private bool isMoving = false;

    private void Update()
    {
        if (isMoving)
        {
            transform.Translate(Vector3.up * moveSpeed * Time.deltaTime);
        }
    }

    public void Shoot()
    {
        isMoving = true;
    }


    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Log"))
        {
            isMoving = false;
            Debug.Log("Collided With Log!");
            transform.position += Vector3.up*0.3f;
            
            transform.SetParent(collision.transform, true);
        }
    }
}
