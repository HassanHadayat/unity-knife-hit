if ( TRACE ) { TRACE( JSON.parse( '["CrackedLog#init","CrackedLog#Explode","CrackedLogForce#getDefaultValue","CrackedLogForce#ctor","CrackedLogForce#ApplyForce","CrackedLogForce#ApplyTorque","CrackedLogForce#getHashCode","CrackedLogForce#equals","CrackedLogForce#$clone","Knife#init","Knife#Awake","Knife#Start","Knife#Shoot","Knife#OnCollisionEnter2D","Knife#DelayGameOver","KnifeController#init","KnifeController#Start","KnifeController#ChangeKnife","KnifeController#ResetKnivesPool","KnifeController#Setup","KnifeController#Update","KnifeController#SpawnKnife","KnifeController#ShootKnife","Log#init","Log#Start","Log#SetRotation","Log#Update","Log#OnCollisionEnter2D","Log#SetRootMotion","Log#SetSelectedKnifeSprite","Log#ResetPosition","Log#Explode","Log#DestroyLog","PlayableAdManager#init","PlayableAdManager#Awake","PlayableAdManager#Start","PlayableAdManager#ShowClickUI","PlayableAdManager#DelayShowClickUI","PlayableAdManager#HideClickUI","PlayableAdManager#DelayHideClickUI","PlayableAdManager#ShootedKnife","PlayableAdManager#Resume","PlayableAdManager#Pause","PlayableAdManager#ShowEndPanel","PlayableAdManager#PlayInstallBtnAnim","PlayableAdManager#GameWon","PlayableAdManager#EndGame","PlayableAdManager#InstallGame","PlayableAdManager#OnDisable","PlayableAdKnife#OnCollisionEnter2D","PlayableAdKnife#DelayGameOver"]' ) ); }
/**
 * @version 1.0.8731.33752
 * @copyright anton
 * @compiler Bridge.NET 17.9.38-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CrackedLog start.*/
    Bridge.define("CrackedLog", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            min_force: 0,
            max_force: 0,
            min_torque: 0,
            max_torque: 0,
            pieces: null,
            knives: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CrackedLog#init", this ); }

                this.min_force = 2;
                this.max_force = 3;
                this.min_torque = -2;
                this.max_torque = 2;
            }
        },
        methods: {
            /*CrackedLog.Explode start.*/
            Explode: function (knifeSprite) {
if ( TRACE ) { TRACE( "CrackedLog#Explode", this ); }

                var $t, $t1;
                $t = Bridge.getEnumerator(this.knives);
                try {
                    while ($t.moveNext()) {
                        var knife = $t.Current.$clone();
                        // Set Knives Sprite
                        knife.rb.GetComponent(UnityEngine.SpriteRenderer).sprite = knifeSprite;

                        // Apply Force and Torque
                        knife.ApplyForce(2, 3);
                        knife.ApplyTorque(this.min_torque, this.max_torque);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t1.moveNext()) {
                        var piece = $t1.Current.$clone();
                        piece.ApplyForce(this.min_force, this.max_force);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*CrackedLog.Explode end.*/


        }
    });
    /*CrackedLog end.*/

    /*CrackedLogForce start.*/
    Bridge.define("CrackedLogForce", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "CrackedLogForce#getDefaultValue", this ); }
 return new CrackedLogForce(); }
            }
        },
        fields: {
            rb: null,
            min_X: 0,
            max_X: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "CrackedLogForce#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*CrackedLogForce.ApplyForce start.*/
            ApplyForce: function (minForce, maxForce) {
if ( TRACE ) { TRACE( "CrackedLogForce#ApplyForce", this ); }

                var randDir = UnityEngine.Vector2.FromVector3(new pc.Vec3( UnityEngine.Random.Range$1(this.min_X, this.max_X), 1.0, 0 ));
                var randMag = UnityEngine.Random.Range$1(minForce, maxForce);

                var force = randDir.clone().normalize().$clone().scale( randMag );
                this.rb.AddForce(force.$clone(), UnityEngine.ForceMode2D.Impulse);

                // Enable gravity and increase it by setting the gravity scale

                //Physics.gravity *= 50f;
                this.rb.gravityScale *= 4;
            },
            /*CrackedLogForce.ApplyForce end.*/

            /*CrackedLogForce.ApplyTorque start.*/
            ApplyTorque: function (minTorque, maxTorque) {
if ( TRACE ) { TRACE( "CrackedLogForce#ApplyTorque", this ); }

                this.rb.AddTorque(UnityEngine.Random.Range$1(minTorque, maxTorque), UnityEngine.ForceMode2D.Impulse);
            },
            /*CrackedLogForce.ApplyTorque end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "CrackedLogForce#getHashCode", this ); }

                var h = Bridge.addHash([4822508175, this.rb, this.min_X, this.max_X]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "CrackedLogForce#equals", this ); }

                if (!Bridge.is(o, CrackedLogForce)) {
                    return false;
                }
                return Bridge.equals(this.rb, o.rb) && Bridge.equals(this.min_X, o.min_X) && Bridge.equals(this.max_X, o.max_X);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "CrackedLogForce#$clone", this ); }

                var s = to || new CrackedLogForce();
                s.rb = this.rb;
                s.min_X = this.min_X;
                s.max_X = this.max_X;
                return s;
            }
        }
    });
    /*CrackedLogForce end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Knife start.*/
    Bridge.define("Knife", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveSpeed: 0,
            isMoving: false,
            knifeController: null,
            col: null,
            rb: null,
            paritcles: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Knife#init", this ); }

                this.isMoving = false;
            }
        },
        methods: {
            /*Knife.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Knife#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(this.col)) {
                    this.col = this.GetComponent(UnityEngine.PolygonCollider2D);
                }
                if (!UnityEngine.Object.op_Implicit(this.rb)) {
                    this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
                }
            },
            /*Knife.Awake end.*/

            /*Knife.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Knife#Start", this ); }

                this.rb.gravityScale = 0.0;
            },
            /*Knife.Start end.*/

            /*Knife.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "Knife#Shoot", this ); }

                this.isMoving = true;
                // Enable Collider to interact with other colliders
                this.col.enabled = true;

                // Make Knife Dynamic to apply Gravity and Upward Force
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                this.rb.gravityScale = 1;
                this.rb.AddForce(UnityEngine.Vector2.FromVector3(pc.Vec3.UP.clone().clone().scale( this.moveSpeed )), UnityEngine.ForceMode2D.Impulse);
            },
            /*Knife.Shoot end.*/

            /*Knife.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Knife#OnCollisionEnter2D", this ); }

                if (collision.collider.CompareTag("Log") && this.isMoving) {
                    this.isMoving = false;
                    // Play wood poping particles
                    this.paritcles.Play();

                    // Making Knife static
                    this.rb.bodyType = UnityEngine.RigidbodyType2D.Static;

                    // Make Knife Child of Log
                    //transform.position += Vector3.up * Random.Range(0f,0.2f);
                    this.transform.SetParent(collision.transform, true);

                    // Update Player Score
                    //GameManager.Instance.UpdateScore();

                    // Spawn New Knife
                    this.knifeController.SpawnKnife();
                } else if (collision.collider.CompareTag("Knife") && this.isMoving) {
                    UnityEngine.Debug.Log$1("Knife Collided With Knife!");

                    this.isMoving = false;

                    // Remove All Forces
                    this.rb.velocity = UnityEngine.Vector2.FromVector3(pc.Vec3.ZERO.clone());

                    // Disable Collider so dont effect by other colliders
                    this.col.enabled = false;

                    // Add some rotation force
                    this.rb.AddTorque(180.0, UnityEngine.ForceMode2D.Force);


                    // GAME OVER Delay
                    this.Invoke("DelayGameOver", 1.0);
                }
            },
            /*Knife.OnCollisionEnter2D end.*/

            /*Knife.DelayGameOver start.*/
            DelayGameOver: function () {
if ( TRACE ) { TRACE( "Knife#DelayGameOver", this ); }

                // Make Knife Kinematic to stop falling
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Kinematic;

                // Invoke the Game Over Event
                //GameManager.Instance.GameOver();
            },
            /*Knife.DelayGameOver end.*/


        }
    });
    /*Knife end.*/

    /*KnifeController start.*/
    Bridge.define("KnifeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            knife: null,
            knifePrefab: null,
            knivesPool: null,
            knivesPoolPos: null,
            availableKnivesList: null,
            availableKnifeUIPrefab: null,
            availableKnivesUI: null,
            usedKnifeColor: null,
            currKnifeIndex: 0,
            CurrKnifeSprite: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "KnifeController#init", this ); }

                this.usedKnifeColor = new UnityEngine.Color();
                this.currKnifeIndex = -1;
            }
        },
        methods: {
            /*KnifeController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "KnifeController#Start", this ); }

                var maxKnivesCount = 20;

                // Initialize
                if (this.knivesPool == null || this.knivesPool.length === 0) {
                    this.knivesPool = System.Array.init(maxKnivesCount, null, UnityEngine.GameObject);

                    // Instantiate Knives at Knives Pool Pos
                    for (var i = 0; i < maxKnivesCount; i = (i + 1) | 0) {
                        this.knivesPool[i] = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.knifePrefab, this.knivesPoolPos);
                        this.knivesPool[i].GetComponent(Knife).knifeController = this;
                    }
                }

                // Instantiate KnivesUI
                this.availableKnivesUI = System.Array.init(maxKnivesCount, null, UnityEngine.GameObject);

                this.currKnifeIndex = -1;
                for (var i1 = 0; i1 < maxKnivesCount; i1 = (i1 + 1) | 0) {
                    this.availableKnivesUI[i1] = UnityEngine.Object.Instantiate$1(UnityEngine.GameObject, this.availableKnifeUIPrefab, this.availableKnivesList.transform, false);
                    this.availableKnivesUI[i1].SetActive(false);
                    this.currKnifeIndex = (this.currKnifeIndex + 1) | 0;
                }
            },
            /*KnifeController.Start end.*/

            /*KnifeController.ChangeKnife start.*/
            ChangeKnife: function (knifeSprite) {
if ( TRACE ) { TRACE( "KnifeController#ChangeKnife", this ); }

                var $t;
                this.CurrKnifeSprite = knifeSprite;
                $t = Bridge.getEnumerator(this.knivesPool);
                try {
                    while ($t.moveNext()) {
                        var knife = $t.Current;
                        knife.GetComponent(UnityEngine.SpriteRenderer).sprite = knifeSprite;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*KnifeController.ChangeKnife end.*/

            /*KnifeController.ResetKnivesPool start.*/
            ResetKnivesPool: function () {
if ( TRACE ) { TRACE( "KnifeController#ResetKnivesPool", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.knivesPool);
                try {
                    while ($t.moveNext()) {
                        var knife = $t.Current;
                        knife.transform.SetParent(this.knivesPoolPos);
                        knife.transform.position = this.knivesPoolPos.position.$clone();
                        knife.transform.rotation = pc.Quat.IDENTITY.clone();

                        knife.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*KnifeController.ResetKnivesPool end.*/

            /*KnifeController.Setup start.*/
            Setup: function (availableKnivesCount) {
if ( TRACE ) { TRACE( "KnifeController#Setup", this ); }

                var $t;
                if (availableKnivesCount === void 0) { availableKnivesCount = 7; }
                availableKnivesCount = (availableKnivesCount > 20) ? 7 : availableKnivesCount;

                // Reset the Knives Pool
                this.ResetKnivesPool();

                // Reset the Knives UI
                $t = Bridge.getEnumerator(this.availableKnivesUI);
                try {
                    while ($t.moveNext()) {
                        var knifeUI = $t.Current;
                        knifeUI.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }


                // Spawn Knives UI
                this.currKnifeIndex = -1;
                for (var i = 0; i < availableKnivesCount; i = (i + 1) | 0) {
                    this.availableKnivesUI[i].SetActive(true);
                    this.availableKnivesUI[i].GetComponent(UnityEngine.UI.Image).color = new pc.Color( 1, 1, 1, 1 );
                    this.currKnifeIndex = (this.currKnifeIndex + 1) | 0;
                }

                // Spawn Knife
                this.SpawnKnife();
            },
            /*KnifeController.Setup end.*/

            /*KnifeController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "KnifeController#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Space) || UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.GameObject.op_Inequality(this.knife, null)) {
                        this.ShootKnife();
                    }
                }
            },
            /*KnifeController.Update end.*/

            /*KnifeController.SpawnKnife start.*/
            SpawnKnife: function () {
if ( TRACE ) { TRACE( "KnifeController#SpawnKnife", this ); }

                if (this.currKnifeIndex >= 0) {
                    this.knife = this.knivesPool[this.currKnifeIndex];
                    this.knife.transform.position = this.transform.position.$clone();
                    this.knife.transform.SetParent(this.transform);
                    this.knife.SetActive(true);
                } else {

                    // PLAYABLE AD COMPELTED
                    this.ResetKnivesPool();
                    PlayableAdManager.Instance.GameWon();

                }
            },
            /*KnifeController.SpawnKnife end.*/

            /*KnifeController.ShootKnife start.*/
            ShootKnife: function () {
if ( TRACE ) { TRACE( "KnifeController#ShootKnife", this ); }

                //if (PlayableAdManager.Instance)
                //{
                //    PlayableAdManager.Instance.ShootedKnife();
                //    PlayableAdManager.Instance.HideClickUI();

                //}
                PlayableAdManager.Instance.ShootedKnife();
                PlayableAdManager.Instance.HideClickUI();
                this.knife.GetComponent(Knife).Shoot();
                this.knife = null;

                // Set Used Knife UI
                this.availableKnivesUI[this.currKnifeIndex].GetComponent(UnityEngine.UI.Image).color = this.usedKnifeColor.$clone();
                this.currKnifeIndex = (this.currKnifeIndex - 1) | 0;
            },
            /*KnifeController.ShootKnife end.*/


        }
    });
    /*KnifeController end.*/

    /*Log start.*/
    Bridge.define("Log", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spriteRenderer: null,
            animController: null,
            selectedKnifeSprite: null,
            crackedLog: null,
            rotateSpeed: 0,
            rotateTimer: 0,
            minRotateTimer: 0,
            maxRotateTimer: 0,
            minRotateSpeed: 0,
            maxRotateSpeed: 0,
            stationaryPos: null,
            hitPos: null,
            stationaryColor: null,
            hitColor: null,
            isRotating: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Log#init", this ); }

                this.stationaryPos = new UnityEngine.Vector3();
                this.hitPos = new UnityEngine.Vector3();
                this.stationaryColor = new UnityEngine.Color();
                this.hitColor = new UnityEngine.Color();
                this.isRotating = true;
            }
        },
        methods: {
            /*Log.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Log#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.animController)) {
                    this.animController.Play$2("InstantiateAnim");
                }

                this.SetRotation();
            },
            /*Log.Start end.*/

            /*Log.SetRotation start.*/
            SetRotation: function () {
if ( TRACE ) { TRACE( "Log#SetRotation", this ); }

                // Set Rotation Timer
                this.rotateTimer = UnityEngine.Random.Range$1(1.0, 10.0);
                // Set Rotation Speed
                this.rotateSpeed = UnityEngine.Random.Range$1(100.0, 250.0);

                // Set Direction
                this.rotateSpeed = (UnityEngine.Random.Range(0, 2) % 2 === 0) ? this.rotateSpeed : -this.rotateSpeed;
            },
            /*Log.SetRotation end.*/

            /*Log.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Log#Update", this ); }


                if (!this.isRotating) {
                    return;
                }

                if (this.rotateTimer <= 0.75) {
                    if (this.rotateSpeed > 0) {
                        this.rotateSpeed -= this.rotateSpeed * UnityEngine.Time.deltaTime;

                    } else if (this.rotateSpeed < 0) {
                        this.rotateSpeed -= this.rotateSpeed * UnityEngine.Time.deltaTime;
                    }
                }

                if (this.rotateTimer <= 0.0 && Math.abs(this.rotateSpeed) <= 40.0) {
                    this.SetRotation();
                } else {
                    this.rotateTimer -= UnityEngine.Time.deltaTime;
                }
                this.transform.Rotate$1(new pc.Vec3( 0, 0, 1 ), this.rotateSpeed * UnityEngine.Time.deltaTime);
            },
            /*Log.Update end.*/

            /*Log.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Log#OnCollisionEnter2D", this ); }


                if (collision.collider.CompareTag("Knife")) {
                    this.transform.position = this.hitPos.$clone();
                    this.spriteRenderer.color = this.hitColor.$clone();
                    this.Invoke("ResetPosition", 0.1);
                }
            },
            /*Log.OnCollisionEnter2D end.*/

            /*Log.SetRootMotion start.*/
            SetRootMotion: function () {
if ( TRACE ) { TRACE( "Log#SetRootMotion", this ); }

                this.animController.applyRootMotion = true;
            },
            /*Log.SetRootMotion end.*/

            /*Log.SetSelectedKnifeSprite start.*/
            SetSelectedKnifeSprite: function (sprite) {
if ( TRACE ) { TRACE( "Log#SetSelectedKnifeSprite", this ); }

                this.selectedKnifeSprite = sprite;
            },
            /*Log.SetSelectedKnifeSprite end.*/

            /*Log.ResetPosition start.*/
            ResetPosition: function () {
if ( TRACE ) { TRACE( "Log#ResetPosition", this ); }

                this.transform.position = this.stationaryPos.$clone();
                this.spriteRenderer.color = this.stationaryColor.$clone();
            },
            /*Log.ResetPosition end.*/

            /*Log.Explode start.*/
            Explode: function () {
if ( TRACE ) { TRACE( "Log#Explode", this ); }

                this.animController.enabled = false;
                this.isRotating = false;
                this.transform.rotation = pc.Quat.IDENTITY.clone();
                this.spriteRenderer.enabled = false;

                var crackedLogGO = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.crackedLog, this.transform);

                if (this.selectedKnifeSprite != null) {
                    crackedLogGO.GetComponent(CrackedLog).Explode(this.selectedKnifeSprite);

                }

                this.Invoke("DestroyLog", 1.0);
            },
            /*Log.Explode end.*/

            /*Log.DestroyLog start.*/
            DestroyLog: function () {
if ( TRACE ) { TRACE( "Log#DestroyLog", this ); }

                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*Log.DestroyLog end.*/


        }
    });
    /*Log end.*/

    /*PlayableAdManager start.*/
    Bridge.define("PlayableAdManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            log: null,
            backgroundImg: null,
            backgroundSprite: null,
            gameIconImg: null,
            gameIconSprite: null,
            gameEndPanelImg: null,
            installBtn: null,
            installBtnTMP: null,
            gameNameTMP: null,
            clickUI: null,
            gameEndPanelAimController: null,
            installBtnAnimController: null,
            knifeController: null,
            knifeShootCount: 0,
            _gameEnded: false,
            gamePlayPanel: null,
            gameEndPanel: null,
            gameEndPanelColor: null,
            gameNameText: null,
            gameNameTextColor: null,
            installBtnColor: null,
            installBtnText: null,
            installBtnTextColor: null,
            url: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#init", this ); }

                this.gameEndPanelColor = new UnityEngine.Color();
                this.gameNameTextColor = new UnityEngine.Color();
                this.installBtnColor = new UnityEngine.Color();
                this.installBtnTextColor = new UnityEngine.Color();
            }
        },
        methods: {
            /*PlayableAdManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(PlayableAdManager.Instance, null)) {
                    PlayableAdManager.Instance = this;
                }
            },
            /*PlayableAdManager.Awake end.*/

            /*PlayableAdManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#Start", this ); }

                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.Resume));
                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.Pause));

                this.backgroundImg.sprite = this.backgroundSprite;
                this.gameIconImg.sprite = this.gameIconSprite;

                this.gameEndPanelImg.color = this.gameEndPanelColor.$clone();
                this.installBtn.image.color = this.installBtnColor.$clone();
                this.installBtnTMP.text = this.installBtnText;
                this.installBtnTMP.color = this.installBtnTextColor.$clone();

                this.gameNameTMP.text = this.gameNameText;
                this.gameNameTMP.color = this.gameNameTextColor.$clone();

                this.knifeShootCount = 0;
                this.knifeController.Setup((3));
            },
            /*PlayableAdManager.Start end.*/

            /*PlayableAdManager.ShowClickUI start.*/
            ShowClickUI: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#ShowClickUI", this ); }

                this.Invoke("DelayShowClickUI", 1.5);
                //Invoke("HideClickUI", 5f);
            },
            /*PlayableAdManager.ShowClickUI end.*/

            /*PlayableAdManager.DelayShowClickUI start.*/
            DelayShowClickUI: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#DelayShowClickUI", this ); }

                if (!this._gameEnded) {
                    this.clickUI.SetActive(true);
                }
            },
            /*PlayableAdManager.DelayShowClickUI end.*/

            /*PlayableAdManager.HideClickUI start.*/
            HideClickUI: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#HideClickUI", this ); }

                this.Invoke("DelayHideClickUI", 0.25);
                //clickUI.SetActive(false);
            },
            /*PlayableAdManager.HideClickUI end.*/

            /*PlayableAdManager.DelayHideClickUI start.*/
            DelayHideClickUI: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#DelayHideClickUI", this ); }

                this.clickUI.SetActive(false);
            },
            /*PlayableAdManager.DelayHideClickUI end.*/

            /*PlayableAdManager.ShootedKnife start.*/
            ShootedKnife: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#ShootedKnife", this ); }

                if (!this._gameEnded) {
                    this.knifeShootCount = (this.knifeShootCount + 1) | 0;
                    Luna.Unity.Analytics.LogEvent$1("knife shooted", this.knifeShootCount);
                }
            },
            /*PlayableAdManager.ShootedKnife end.*/

            /*PlayableAdManager.Resume start.*/
            Resume: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#Resume", this ); }

                UnityEngine.Time.timeScale = 1;
            },
            /*PlayableAdManager.Resume end.*/

            /*PlayableAdManager.Pause start.*/
            Pause: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#Pause", this ); }

                UnityEngine.Time.timeScale = 0;
            },
            /*PlayableAdManager.Pause end.*/

            /*PlayableAdManager.ShowEndPanel start.*/
            ShowEndPanel: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#ShowEndPanel", this ); }

                this.Pause();
                this.clickUI.SetActive(false);
                this.gameEndPanel.SetActive(true);
                this.gameEndPanelAimController.Play$2("GameEndPanelAnim");
                this.installBtnAnimController.Play$2("InstallPopAnim");
                //Invoke("PlayInstallBtnAnim", 1f);
            },
            /*PlayableAdManager.ShowEndPanel end.*/

            /*PlayableAdManager.PlayInstallBtnAnim start.*/
            PlayInstallBtnAnim: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#PlayInstallBtnAnim", this ); }
 },
            /*PlayableAdManager.PlayInstallBtnAnim end.*/

            /*PlayableAdManager.GameWon start.*/
            GameWon: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#GameWon", this ); }

                this.log.Explode();
                this.Invoke("EndGame", 1.0);
            },
            /*PlayableAdManager.GameWon end.*/

            /*PlayableAdManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#EndGame", this ); }

                this.ShowEndPanel();
                //Uncomment these when Luna is installed
                Luna.Unity.Playable.InstallFullGame();

                if (!this._gameEnded) {
                    //Uncomment these when Luna is installed
                    Luna.Unity.LifeCycle.GameEnded();
                    this._gameEnded = true;
                }
            },
            /*PlayableAdManager.EndGame end.*/

            /*PlayableAdManager.InstallGame start.*/
            InstallGame: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#InstallGame", this ); }

                //Uncomment these when Luna is installed
                Luna.Unity.Playable.InstallFullGame("", this.url);
                UnityEngine.Application.OpenURL(this.url);
            },
            /*PlayableAdManager.InstallGame end.*/

            /*PlayableAdManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableAdManager#OnDisable", this ); }

                UnityEngine.Object.Destroy(this);
            },
            /*PlayableAdManager.OnDisable end.*/


        }
    });
    /*PlayableAdManager end.*/

    /*PlayableAdKnife start.*/
    Bridge.define("PlayableAdKnife", {
        inherits: [Knife],
        methods: {
            /*PlayableAdKnife.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "PlayableAdKnife#OnCollisionEnter2D", this ); }

                if (collision.collider.CompareTag("Log") && this.isMoving) {
                    this.isMoving = false;
                    // Play wood poping particles
                    this.paritcles.Play();

                    // Making Knife static
                    this.rb.bodyType = UnityEngine.RigidbodyType2D.Static;

                    // Make Knife Child of Log
                    //transform.position += Vector3.up * Random.Range(0f,0.2f);
                    this.transform.SetParent(collision.transform, true);


                    // PLAYABLE AD NEXT MOVE
                    // Update Player Score
                    //GameManager.Instance.UpdateScore();

                    // Spawn New Knife
                    this.knifeController.SpawnKnife();
                } else if (collision.collider.CompareTag("Knife") && this.isMoving) {
                    UnityEngine.Debug.Log$1("Knife Collided With Knife!");

                    this.isMoving = false;

                    // Remove All Forces
                    this.rb.velocity = UnityEngine.Vector2.FromVector3(pc.Vec3.ZERO.clone());

                    // Disable Collider so dont effect by other colliders
                    this.col.enabled = false;

                    // Add some rotation force
                    this.rb.AddTorque(180.0, UnityEngine.ForceMode2D.Force);


                    // GAME OVER Delay
                    this.Invoke("DelayGameOver", 1.0);
                }
            },
            /*PlayableAdKnife.OnCollisionEnter2D end.*/

            /*PlayableAdKnife.DelayGameOver start.*/
            DelayGameOver: function () {
if ( TRACE ) { TRACE( "PlayableAdKnife#DelayGameOver", this ); }

                // Make Knife Kinematic to stop falling
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Kinematic;


                // PLAYABLE AD OVER
                PlayableAdManager.Instance.ShowEndPanel();
            },
            /*PlayableAdKnife.DelayGameOver end.*/


        }
    });
    /*PlayableAdKnife end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","UnityEngine.UI","TMPro"];

    /*KnifeController start.*/
    $m("KnifeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeKnife","t":8,"pi":[{"n":"knifeSprite","pt":$n[0].Sprite,"ps":0}],"sn":"ChangeKnife","rt":$n[1].Void,"p":[$n[0].Sprite]},{"a":2,"n":"ResetKnivesPool","t":8,"sn":"ResetKnivesPool","rt":$n[1].Void},{"a":2,"n":"Setup","t":8,"pi":[{"n":"availableKnivesCount","dv":7,"o":true,"pt":$n[1].Int32,"ps":0}],"sn":"Setup","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"ShootKnife","t":8,"sn":"ShootKnife","rt":$n[1].Void},{"a":2,"n":"SpawnKnife","t":8,"sn":"SpawnKnife","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"CurrKnifeSprite","t":16,"rt":$n[0].Sprite,"g":{"a":2,"n":"get_CurrKnifeSprite","t":8,"rt":$n[0].Sprite,"fg":"CurrKnifeSprite"},"s":{"a":1,"n":"set_CurrKnifeSprite","t":8,"p":[$n[0].Sprite],"rt":$n[1].Void,"fs":"CurrKnifeSprite"},"fn":"CurrKnifeSprite"},{"a":2,"n":"availableKnifeUIPrefab","t":4,"rt":$n[0].GameObject,"sn":"availableKnifeUIPrefab"},{"a":2,"n":"availableKnivesList","t":4,"rt":$n[0].GameObject,"sn":"availableKnivesList"},{"a":2,"n":"availableKnivesUI","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"availableKnivesUI"},{"a":2,"n":"currKnifeIndex","t":4,"rt":$n[1].Int32,"sn":"currKnifeIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"knife","t":4,"rt":$n[0].GameObject,"sn":"knife"},{"a":2,"n":"knifePrefab","t":4,"rt":$n[0].GameObject,"sn":"knifePrefab"},{"a":2,"n":"knivesPool","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"knivesPool"},{"a":2,"n":"knivesPoolPos","t":4,"rt":$n[0].Transform,"sn":"knivesPoolPos"},{"a":2,"n":"usedKnifeColor","t":4,"rt":$n[0].Color,"sn":"usedKnifeColor"},{"a":1,"backing":true,"n":"<CurrKnifeSprite>k__BackingField","t":4,"rt":$n[0].Sprite,"sn":"CurrKnifeSprite"}]}; }, $n);
    /*KnifeController end.*/

    /*CrackedLogForce start.*/
    $m("CrackedLogForce", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyForce","t":8,"pi":[{"n":"minForce","pt":$n[1].Single,"ps":0},{"n":"maxForce","pt":$n[1].Single,"ps":1}],"sn":"ApplyForce","rt":$n[1].Void,"p":[$n[1].Single,$n[1].Single]},{"a":2,"n":"ApplyTorque","t":8,"pi":[{"n":"minTorque","pt":$n[1].Single,"ps":0},{"n":"maxTorque","pt":$n[1].Single,"ps":1}],"sn":"ApplyTorque","rt":$n[1].Void,"p":[$n[1].Single,$n[1].Single]},{"a":2,"n":"max_X","t":4,"rt":$n[1].Single,"sn":"max_X","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"min_X","t":4,"rt":$n[1].Single,"sn":"min_X","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"rb"}]}; }, $n);
    /*CrackedLogForce end.*/

    /*CrackedLog start.*/
    $m("CrackedLog", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Explode","t":8,"pi":[{"n":"knifeSprite","pt":$n[0].Sprite,"ps":0}],"sn":"Explode","rt":$n[1].Void,"p":[$n[0].Sprite]},{"a":2,"n":"knives","t":4,"rt":System.Array.type(CrackedLogForce),"sn":"knives"},{"a":2,"n":"max_force","t":4,"rt":$n[1].Single,"sn":"max_force","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"max_torque","t":4,"rt":$n[1].Single,"sn":"max_torque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"min_force","t":4,"rt":$n[1].Single,"sn":"min_force","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"min_torque","t":4,"rt":$n[1].Single,"sn":"min_torque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pieces","t":4,"rt":System.Array.type(CrackedLogForce),"sn":"pieces"}]}; }, $n);
    /*CrackedLog end.*/

    /*Knife start.*/
    $m("Knife", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"v":true,"a":2,"n":"DelayGameOver","t":8,"sn":"DelayGameOver","rt":$n[1].Void},{"v":true,"a":2,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":2,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"col","t":4,"rt":$n[0].PolygonCollider2D,"sn":"col"},{"a":3,"n":"isMoving","t":4,"rt":$n[1].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"knifeController","t":4,"rt":KnifeController,"sn":"knifeController"},{"a":2,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"paritcles","t":4,"rt":$n[0].ParticleSystem,"sn":"paritcles"},{"a":2,"n":"rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"rb"}]}; }, $n);
    /*Knife end.*/

    /*Log start.*/
    $m("Log", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DestroyLog","t":8,"sn":"DestroyLog","rt":$n[1].Void},{"a":2,"n":"Explode","t":8,"sn":"Explode","rt":$n[1].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":2,"n":"ResetPosition","t":8,"sn":"ResetPosition","rt":$n[1].Void},{"a":2,"n":"SetRootMotion","t":8,"sn":"SetRootMotion","rt":$n[1].Void},{"a":1,"n":"SetRotation","t":8,"sn":"SetRotation","rt":$n[1].Void},{"a":2,"n":"SetSelectedKnifeSprite","t":8,"pi":[{"n":"sprite","pt":$n[0].Sprite,"ps":0}],"sn":"SetSelectedKnifeSprite","rt":$n[1].Void,"p":[$n[0].Sprite]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"animController","t":4,"rt":$n[0].Animator,"sn":"animController"},{"a":2,"n":"crackedLog","t":4,"rt":$n[0].GameObject,"sn":"crackedLog"},{"a":2,"n":"hitColor","t":4,"rt":$n[0].Color,"sn":"hitColor"},{"a":2,"n":"hitPos","t":4,"rt":$n[0].Vector3,"sn":"hitPos"},{"a":1,"n":"isRotating","t":4,"rt":$n[1].Boolean,"sn":"isRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxRotateSpeed","t":4,"rt":$n[1].Single,"sn":"maxRotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxRotateTimer","t":4,"rt":$n[1].Single,"sn":"maxRotateTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minRotateSpeed","t":4,"rt":$n[1].Single,"sn":"minRotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minRotateTimer","t":4,"rt":$n[1].Single,"sn":"minRotateTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotateSpeed","t":4,"rt":$n[1].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotateTimer","t":4,"rt":$n[1].Single,"sn":"rotateTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"selectedKnifeSprite","t":4,"rt":$n[0].Sprite,"sn":"selectedKnifeSprite"},{"a":2,"n":"spriteRenderer","t":4,"rt":$n[0].SpriteRenderer,"sn":"spriteRenderer"},{"a":2,"n":"stationaryColor","t":4,"rt":$n[0].Color,"sn":"stationaryColor"},{"a":2,"n":"stationaryPos","t":4,"rt":$n[0].Vector3,"sn":"stationaryPos"}]}; }, $n);
    /*Log end.*/

    /*PlayableAdKnife start.*/
    $m("PlayableAdKnife", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"DelayGameOver","t":8,"sn":"DelayGameOver","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]}]}; }, $n);
    /*PlayableAdKnife end.*/

    /*PlayableAdManager start.*/
    $m("PlayableAdManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"DelayHideClickUI","t":8,"sn":"DelayHideClickUI","rt":$n[1].Void},{"a":1,"n":"DelayShowClickUI","t":8,"sn":"DelayShowClickUI","rt":$n[1].Void},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[1].Void},{"a":2,"n":"GameWon","t":8,"sn":"GameWon","rt":$n[1].Void},{"a":2,"n":"HideClickUI","t":8,"sn":"HideClickUI","rt":$n[1].Void},{"a":2,"n":"InstallGame","t":8,"sn":"InstallGame","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"Pause","t":8,"sn":"Pause","rt":$n[1].Void},{"a":2,"n":"PlayInstallBtnAnim","t":8,"sn":"PlayInstallBtnAnim","rt":$n[1].Void},{"a":1,"n":"Resume","t":8,"sn":"Resume","rt":$n[1].Void},{"a":2,"n":"ShootedKnife","t":8,"sn":"ShootedKnife","rt":$n[1].Void},{"a":2,"n":"ShowClickUI","t":8,"sn":"ShowClickUI","rt":$n[1].Void},{"a":2,"n":"ShowEndPanel","t":8,"sn":"ShowEndPanel","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":PlayableAdManager,"sn":"Instance"},{"a":1,"n":"_gameEnded","t":4,"rt":$n[1].Boolean,"sn":"_gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"backgroundImg","t":4,"rt":$n[0].SpriteRenderer,"sn":"backgroundImg"},{"a":2,"n":"backgroundSprite","t":4,"rt":$n[0].Sprite,"sn":"backgroundSprite"},{"a":2,"n":"clickUI","t":4,"rt":$n[0].GameObject,"sn":"clickUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameEndPanel","t":4,"rt":$n[0].GameObject,"sn":"gameEndPanel"},{"a":2,"n":"gameEndPanelAimController","t":4,"rt":$n[0].Animator,"sn":"gameEndPanelAimController"},{"at":[new UnityEngine.HeaderAttribute("Playable Ad Settings"),new UnityEngine.LunaPlaygroundAssetAttribute("Panel Color", 0, "Game End Panel")],"a":2,"n":"gameEndPanelColor","t":4,"rt":$n[0].Color,"sn":"gameEndPanelColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameEndPanelImg","t":4,"rt":$n[2].Image,"sn":"gameEndPanelImg"},{"a":2,"n":"gameIconImg","t":4,"rt":$n[2].Image,"sn":"gameIconImg"},{"a":2,"n":"gameIconSprite","t":4,"rt":$n[0].Sprite,"sn":"gameIconSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameNameTMP","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"gameNameTMP"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Game Name Text", 1, "Game End Panel", false, null)],"a":2,"n":"gameNameText","t":4,"rt":$n[1].String,"sn":"gameNameText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Game Name Text Color", 1, "Game End Panel", false, null)],"a":2,"n":"gameNameTextColor","t":4,"rt":$n[0].Color,"sn":"gameNameTextColor"},{"at":[new UnityEngine.HeaderAttribute("Panels"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gamePlayPanel","t":4,"rt":$n[0].GameObject,"sn":"gamePlayPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"installBtn","t":4,"rt":$n[2].Button,"sn":"installBtn"},{"a":2,"n":"installBtnAnimController","t":4,"rt":$n[0].Animator,"sn":"installBtnAnimController"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Install Button Color", 1, "Game End Panel", false, null)],"a":2,"n":"installBtnColor","t":4,"rt":$n[0].Color,"sn":"installBtnColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"installBtnTMP","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"installBtnTMP"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Install Button Text", 1, "Game End Panel", false, null)],"a":2,"n":"installBtnText","t":4,"rt":$n[1].String,"sn":"installBtnText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Install Button Text Color", 1, "Game End Panel", false, null)],"a":2,"n":"installBtnTextColor","t":4,"rt":$n[0].Color,"sn":"installBtnTextColor"},{"a":2,"n":"knifeController","t":4,"rt":KnifeController,"sn":"knifeController"},{"a":1,"n":"knifeShootCount","t":4,"rt":$n[1].Int32,"sn":"knifeShootCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"log","t":4,"rt":Log,"sn":"log"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Game URL", 1, "Game End Panel", false, null)],"a":2,"n":"url","t":4,"rt":$n[1].String,"sn":"url"}]}; }, $n);
    /*PlayableAdManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
