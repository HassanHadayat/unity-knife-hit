using UnityEngine;

public class PlayableAdKnife : Knife
{
    public override void OnCollisionEnter2D(Collision2D collision)
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


            // PLAYABLE AD NEXT MOVE
            // Update Player Score
            //GameManager.Instance.UpdateScore();

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

    public override void DelayGameOver()
    {
        // Make Knife Kinematic to stop falling
        rb.bodyType = RigidbodyType2D.Kinematic;


        // PLAYABLE AD OVER
        PlayableAdManager.Instance.ShowEndPanel();
    }
}
