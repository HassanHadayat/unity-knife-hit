using System;
using UnityEngine;

[Serializable]
public struct CrackedLogForce
{
    public Rigidbody2D rb;

    //public Vector2 direction;
    public float min_X;
    public float max_X;

    // Apply a force to the cake piece
    public void ApplyForce(float minForce, float maxForce)
    {
        Vector2 randDir = new Vector3(UnityEngine.Random.Range(min_X, max_X), 1f);
        float randMag = UnityEngine.Random.Range(minForce, maxForce);

        Vector2 force = randDir.normalized * randMag;
        rb.AddForce(force, ForceMode2D.Impulse);

        // Enable gravity and increase it by setting the gravity scale

        //Physics.gravity *= 50f;
        rb.gravityScale *= 4;
    }
    public void ApplyTorque(float minTorque, float maxTorque)
    {
        rb.AddTorque(UnityEngine.Random.Range(minTorque, maxTorque), ForceMode2D.Impulse);
    }
}

public class CrackedLog : MonoBehaviour
{
    public float min_force = 2;
    public float max_force = 3;

    public float min_torque = -2;
    public float max_torque = 2;

    public CrackedLogForce[] pieces;
    public CrackedLogForce[] knives;

    private void Start()
    {
        foreach (var piece in pieces)
        {
            piece.ApplyForce(min_force, max_force);
        }

        foreach (var knife in knives)
        {
            knife.ApplyForce(2, 3);
            knife.ApplyTorque(min_torque, max_torque);
        }
    }

}
