using UnityEngine;

public class Knife : MonoBehaviour
{
    public float moveSpeed;
    protected bool isMoving = false;

    public KnifeController knifeController;
    public PolygonCollider2D col;
    public Rigidbody2D rb;
    public ParticleSystem paritcles;

    private void Awake()
    {
        if(!col) col = GetComponent<PolygonCollider2D>();
        if (!rb) rb = GetComponent<Rigidbody2D>();
    }

    private void Start()
    {
        rb.gravityScale = 0f;
    }

    public void Shoot()
    {
        isMoving = true;
        // Enable Collider to interact with other colliders
        col.enabled = true;
        
        // Make Knife Dynamic to apply Gravity and Upward Force
        rb.bodyType = RigidbodyType2D.Dynamic;
        rb.gravityScale = 1;
        rb.AddForce(Vector3.up * moveSpeed, ForceMode2D.Impulse);
    }

    public virtual void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.collider.CompareTag("Log") && isMoving)
        {
            isMoving = false;
            // Play wood poping particles
            paritcles.Play();

            // Making Knife static
            rb.bodyType = RigidbodyType2D.Static;

            // Make Knife Child of Log
            //transform.position += Vector3.up * Random.Range(0f,0.2f);
            transform.SetParent(collision.transform, true);

            // Update Player Score
            GameManager.Instance.UpdateScore();

            // Spawn New Knife
            knifeController.SpawnKnife();
        }
        else if (collision.collider.CompareTag("Knife") && isMoving)
        {
            Debug.Log("Knife Collided With Knife!");
            
            isMoving = false;

            // Remove All Forces
            rb.velocity = Vector3.zero;

            // Disable Collider so dont effect by other colliders
            col.enabled = false;
            
            // Add some rotation force
            rb.AddTorque(180f, ForceMode2D.Force);


            // GAME OVER Delay
            Invoke("DelayGameOver", 1f);
        }
    }

    public virtual void DelayGameOver()
    {
        // Make Knife Kinematic to stop falling
        rb.bodyType = RigidbodyType2D.Kinematic;

        //Invoke the Game Over Event
        GameManager.Instance.GameOver();
    }
}
