var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.JointSpring' )
  var i3865 = data
  i3864.spring = i3865[0]
  i3864.damper = i3865[1]
  i3864.targetPosition = i3865[2]
  return i3864
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.JointMotor' )
  var i3867 = data
  i3866.m_TargetVelocity = i3867[0]
  i3866.m_Force = i3867[1]
  i3866.m_FreeSpin = i3867[2]
  return i3866
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.JointLimits' )
  var i3869 = data
  i3868.m_Min = i3869[0]
  i3868.m_Max = i3869[1]
  i3868.m_Bounciness = i3869[2]
  i3868.m_BounceMinVelocity = i3869[3]
  i3868.m_ContactDistance = i3869[4]
  i3868.minBounce = i3869[5]
  i3868.maxBounce = i3869[6]
  return i3868
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.JointDrive' )
  var i3871 = data
  i3870.m_PositionSpring = i3871[0]
  i3870.m_PositionDamper = i3871[1]
  i3870.m_MaximumForce = i3871[2]
  return i3870
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3872 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3873 = data
  i3872.m_Spring = i3873[0]
  i3872.m_Damper = i3873[1]
  return i3872
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3875 = data
  i3874.m_Limit = i3875[0]
  i3874.m_Bounciness = i3875[1]
  i3874.m_ContactDistance = i3875[2]
  return i3874
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3876 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3877 = data
  i3876.m_ExtremumSlip = i3877[0]
  i3876.m_ExtremumValue = i3877[1]
  i3876.m_AsymptoteSlip = i3877[2]
  i3876.m_AsymptoteValue = i3877[3]
  i3876.m_Stiffness = i3877[4]
  return i3876
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3878 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3879 = data
  i3878.m_LowerAngle = i3879[0]
  i3878.m_UpperAngle = i3879[1]
  return i3878
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3880 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3881 = data
  i3880.m_MotorSpeed = i3881[0]
  i3880.m_MaximumMotorTorque = i3881[1]
  return i3880
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3882 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3883 = data
  i3882.m_DampingRatio = i3883[0]
  i3882.m_Frequency = i3883[1]
  i3882.m_Angle = i3883[2]
  return i3882
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3885 = data
  i3884.m_LowerTranslation = i3885[0]
  i3884.m_UpperTranslation = i3885[1]
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3886 = root || new pc.UnityMaterial()
  var i3887 = data
  i3886.name = i3887[0]
  request.r(i3887[1], i3887[2], 0, i3886, 'shader')
  i3886.renderQueue = i3887[3]
  i3886.enableInstancing = !!i3887[4]
  var i3889 = i3887[5]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3889[i + 0]) );
  }
  i3886.floatParameters = i3888
  var i3891 = i3887[6]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3891[i + 0]) );
  }
  i3886.colorParameters = i3890
  var i3893 = i3887[7]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3893[i + 0]) );
  }
  i3886.vectorParameters = i3892
  var i3895 = i3887[8]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3895[i + 0]) );
  }
  i3886.textureParameters = i3894
  var i3897 = i3887[9]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3897[i + 0]) );
  }
  i3886.materialFlags = i3896
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3901 = data
  i3900.name = i3901[0]
  i3900.value = i3901[1]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3905 = data
  i3904.name = i3905[0]
  i3904.value = new pc.Color(i3905[1], i3905[2], i3905[3], i3905[4])
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3909 = data
  i3908.name = i3909[0]
  i3908.value = new pc.Vec4( i3909[1], i3909[2], i3909[3], i3909[4] )
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3913 = data
  i3912.name = i3913[0]
  request.r(i3913[1], i3913[2], 0, i3912, 'value')
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3917 = data
  i3916.name = i3917[0]
  i3916.enabled = !!i3917[1]
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3919 = data
  i3918.position = new pc.Vec3( i3919[0], i3919[1], i3919[2] )
  i3918.scale = new pc.Vec3( i3919[3], i3919[4], i3919[5] )
  i3918.rotation = new pc.Quat(i3919[6], i3919[7], i3919[8], i3919[9])
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3921 = data
  i3920.enabled = !!i3921[0]
  request.r(i3921[1], i3921[2], 0, i3920, 'sharedMaterial')
  var i3923 = i3921[3]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 2) {
  request.r(i3923[i + 0], i3923[i + 1], 2, i3922, '')
  }
  i3920.sharedMaterials = i3922
  i3920.receiveShadows = !!i3921[4]
  i3920.shadowCastingMode = i3921[5]
  i3920.sortingLayerID = i3921[6]
  i3920.sortingOrder = i3921[7]
  i3920.lightmapIndex = i3921[8]
  i3920.lightmapSceneIndex = i3921[9]
  i3920.lightmapScaleOffset = new pc.Vec4( i3921[10], i3921[11], i3921[12], i3921[13] )
  i3920.lightProbeUsage = i3921[14]
  i3920.reflectionProbeUsage = i3921[15]
  i3920.color = new pc.Color(i3921[16], i3921[17], i3921[18], i3921[19])
  request.r(i3921[20], i3921[21], 0, i3920, 'sprite')
  i3920.flipX = !!i3921[22]
  i3920.flipY = !!i3921[23]
  i3920.drawMode = i3921[24]
  i3920.size = new pc.Vec2( i3921[25], i3921[26] )
  i3920.tileMode = i3921[27]
  i3920.adaptiveModeThreshold = i3921[28]
  i3920.maskInteraction = i3921[29]
  i3920.spriteSortPoint = i3921[30]
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3927 = data
  i3926.enabled = !!i3927[0]
  i3926.isTrigger = !!i3927[1]
  i3926.usedByEffector = !!i3927[2]
  i3926.density = i3927[3]
  i3926.offset = new pc.Vec2( i3927[4], i3927[5] )
  request.r(i3927[6], i3927[7], 0, i3926, 'material')
  i3926.usedByComposite = !!i3927[8]
  i3926.autoTiling = !!i3927[9]
  var i3929 = i3927[10]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 1) {
  var i3931 = i3929[i + 0]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 2) {
    i3930.push( new pc.Vec2( i3931[i + 0], i3931[i + 1] ) );
  }
    i3928.push( i3930 );
  }
  i3926.points = i3928
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3939 = data
  i3938.bodyType = i3939[0]
  request.r(i3939[1], i3939[2], 0, i3938, 'material')
  i3938.simulated = !!i3939[3]
  i3938.useAutoMass = !!i3939[4]
  i3938.mass = i3939[5]
  i3938.drag = i3939[6]
  i3938.angularDrag = i3939[7]
  i3938.gravityScale = i3939[8]
  i3938.collisionDetectionMode = i3939[9]
  i3938.sleepMode = i3939[10]
  i3938.constraints = i3939[11]
  return i3938
}

Deserializers["PlayableAdKnife"] = function (request, data, root) {
  var i3940 = root || request.c( 'PlayableAdKnife' )
  var i3941 = data
  i3940.moveSpeed = i3941[0]
  request.r(i3941[1], i3941[2], 0, i3940, 'knifeController')
  request.r(i3941[3], i3941[4], 0, i3940, 'col')
  request.r(i3941[5], i3941[6], 0, i3940, 'rb')
  request.r(i3941[7], i3941[8], 0, i3940, 'paritcles')
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3943 = data
  i3942.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3943[0], i3942.main)
  i3942.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3943[1], i3942.colorBySpeed)
  i3942.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3943[2], i3942.colorOverLifetime)
  i3942.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3943[3], i3942.emission)
  i3942.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3943[4], i3942.rotationBySpeed)
  i3942.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3943[5], i3942.rotationOverLifetime)
  i3942.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3943[6], i3942.shape)
  i3942.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3943[7], i3942.sizeBySpeed)
  i3942.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3943[8], i3942.sizeOverLifetime)
  i3942.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3943[9], i3942.textureSheetAnimation)
  i3942.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3943[10], i3942.velocityOverLifetime)
  i3942.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3943[11], i3942.noise)
  i3942.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3943[12], i3942.inheritVelocity)
  i3942.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3943[13], i3942.forceOverLifetime)
  i3942.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3943[14], i3942.limitVelocityOverLifetime)
  i3942.useAutoRandomSeed = !!i3943[15]
  i3942.randomSeed = i3943[16]
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3944 = root || new pc.ParticleSystemMain()
  var i3945 = data
  i3944.duration = i3945[0]
  i3944.loop = !!i3945[1]
  i3944.prewarm = !!i3945[2]
  i3944.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[3], i3944.startDelay)
  i3944.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[4], i3944.startLifetime)
  i3944.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[5], i3944.startSpeed)
  i3944.startSize3D = !!i3945[6]
  i3944.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[7], i3944.startSizeX)
  i3944.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[8], i3944.startSizeY)
  i3944.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[9], i3944.startSizeZ)
  i3944.startRotation3D = !!i3945[10]
  i3944.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[11], i3944.startRotationX)
  i3944.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[12], i3944.startRotationY)
  i3944.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[13], i3944.startRotationZ)
  i3944.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3945[14], i3944.startColor)
  i3944.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3945[15], i3944.gravityModifier)
  i3944.simulationSpace = i3945[16]
  request.r(i3945[17], i3945[18], 0, i3944, 'customSimulationSpace')
  i3944.simulationSpeed = i3945[19]
  i3944.useUnscaledTime = !!i3945[20]
  i3944.scalingMode = i3945[21]
  i3944.playOnAwake = !!i3945[22]
  i3944.maxParticles = i3945[23]
  i3944.emitterVelocityMode = i3945[24]
  i3944.stopAction = i3945[25]
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3946 = root || new pc.MinMaxCurve()
  var i3947 = data
  i3946.mode = i3947[0]
  i3946.curveMin = new pc.AnimationCurve( { keys_flow: i3947[1] } )
  i3946.curveMax = new pc.AnimationCurve( { keys_flow: i3947[2] } )
  i3946.curveMultiplier = i3947[3]
  i3946.constantMin = i3947[4]
  i3946.constantMax = i3947[5]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3948 = root || new pc.MinMaxGradient()
  var i3949 = data
  i3948.mode = i3949[0]
  i3948.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3949[1], i3948.gradientMin)
  i3948.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3949[2], i3948.gradientMax)
  i3948.colorMin = new pc.Color(i3949[3], i3949[4], i3949[5], i3949[6])
  i3948.colorMax = new pc.Color(i3949[7], i3949[8], i3949[9], i3949[10])
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3951 = data
  i3950.mode = i3951[0]
  var i3953 = i3951[1]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3953[i + 0]) );
  }
  i3950.colorKeys = i3952
  var i3955 = i3951[2]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3955[i + 0]) );
  }
  i3950.alphaKeys = i3954
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3956 = root || new pc.ParticleSystemColorBySpeed()
  var i3957 = data
  i3956.enabled = !!i3957[0]
  i3956.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3957[1], i3956.color)
  i3956.range = new pc.Vec2( i3957[2], i3957[3] )
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3961 = data
  i3960.color = new pc.Color(i3961[0], i3961[1], i3961[2], i3961[3])
  i3960.time = i3961[4]
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3965 = data
  i3964.alpha = i3965[0]
  i3964.time = i3965[1]
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3966 = root || new pc.ParticleSystemColorOverLifetime()
  var i3967 = data
  i3966.enabled = !!i3967[0]
  i3966.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3967[1], i3966.color)
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3968 = root || new pc.ParticleSystemEmitter()
  var i3969 = data
  i3968.enabled = !!i3969[0]
  i3968.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3969[1], i3968.rateOverTime)
  i3968.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3969[2], i3968.rateOverDistance)
  var i3971 = i3969[3]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3971[i + 0]) );
  }
  i3968.bursts = i3970
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3974 = root || new pc.ParticleSystemBurst()
  var i3975 = data
  i3974.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3975[0], i3974.count)
  i3974.cycleCount = i3975[1]
  i3974.minCount = i3975[2]
  i3974.maxCount = i3975[3]
  i3974.repeatInterval = i3975[4]
  i3974.time = i3975[5]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3976 = root || new pc.ParticleSystemRotationBySpeed()
  var i3977 = data
  i3976.enabled = !!i3977[0]
  i3976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3977[1], i3976.x)
  i3976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3977[2], i3976.y)
  i3976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3977[3], i3976.z)
  i3976.separateAxes = !!i3977[4]
  i3976.range = new pc.Vec2( i3977[5], i3977[6] )
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3978 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3979 = data
  i3978.enabled = !!i3979[0]
  i3978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3979[1], i3978.x)
  i3978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3979[2], i3978.y)
  i3978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3979[3], i3978.z)
  i3978.separateAxes = !!i3979[4]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3980 = root || new pc.ParticleSystemShape()
  var i3981 = data
  i3980.enabled = !!i3981[0]
  i3980.shapeType = i3981[1]
  i3980.randomDirectionAmount = i3981[2]
  i3980.sphericalDirectionAmount = i3981[3]
  i3980.randomPositionAmount = i3981[4]
  i3980.alignToDirection = !!i3981[5]
  i3980.radius = i3981[6]
  i3980.radiusMode = i3981[7]
  i3980.radiusSpread = i3981[8]
  i3980.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3981[9], i3980.radiusSpeed)
  i3980.radiusThickness = i3981[10]
  i3980.angle = i3981[11]
  i3980.length = i3981[12]
  i3980.boxThickness = new pc.Vec3( i3981[13], i3981[14], i3981[15] )
  i3980.meshShapeType = i3981[16]
  request.r(i3981[17], i3981[18], 0, i3980, 'mesh')
  request.r(i3981[19], i3981[20], 0, i3980, 'meshRenderer')
  request.r(i3981[21], i3981[22], 0, i3980, 'skinnedMeshRenderer')
  i3980.useMeshMaterialIndex = !!i3981[23]
  i3980.meshMaterialIndex = i3981[24]
  i3980.useMeshColors = !!i3981[25]
  i3980.normalOffset = i3981[26]
  i3980.arc = i3981[27]
  i3980.arcMode = i3981[28]
  i3980.arcSpread = i3981[29]
  i3980.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3981[30], i3980.arcSpeed)
  i3980.donutRadius = i3981[31]
  i3980.position = new pc.Vec3( i3981[32], i3981[33], i3981[34] )
  i3980.rotation = new pc.Vec3( i3981[35], i3981[36], i3981[37] )
  i3980.scale = new pc.Vec3( i3981[38], i3981[39], i3981[40] )
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3982 = root || new pc.ParticleSystemSizeBySpeed()
  var i3983 = data
  i3982.enabled = !!i3983[0]
  i3982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3983[1], i3982.x)
  i3982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3983[2], i3982.y)
  i3982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3983[3], i3982.z)
  i3982.separateAxes = !!i3983[4]
  i3982.range = new pc.Vec2( i3983[5], i3983[6] )
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3984 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3985 = data
  i3984.enabled = !!i3985[0]
  i3984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3985[1], i3984.x)
  i3984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3985[2], i3984.y)
  i3984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3985[3], i3984.z)
  i3984.separateAxes = !!i3985[4]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3986 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3987 = data
  i3986.enabled = !!i3987[0]
  i3986.mode = i3987[1]
  i3986.animation = i3987[2]
  i3986.numTilesX = i3987[3]
  i3986.numTilesY = i3987[4]
  i3986.useRandomRow = !!i3987[5]
  i3986.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3987[6], i3986.frameOverTime)
  i3986.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3987[7], i3986.startFrame)
  i3986.cycleCount = i3987[8]
  i3986.rowIndex = i3987[9]
  i3986.flipU = i3987[10]
  i3986.flipV = i3987[11]
  i3986.spriteCount = i3987[12]
  var i3989 = i3987[13]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 2) {
  request.r(i3989[i + 0], i3989[i + 1], 2, i3988, '')
  }
  i3986.sprites = i3988
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3992 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3993 = data
  i3992.enabled = !!i3993[0]
  i3992.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[1], i3992.x)
  i3992.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[2], i3992.y)
  i3992.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[3], i3992.z)
  i3992.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[4], i3992.radial)
  i3992.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[5], i3992.speedModifier)
  i3992.space = i3993[6]
  i3992.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[7], i3992.orbitalX)
  i3992.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[8], i3992.orbitalY)
  i3992.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[9], i3992.orbitalZ)
  i3992.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[10], i3992.orbitalOffsetX)
  i3992.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[11], i3992.orbitalOffsetY)
  i3992.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3993[12], i3992.orbitalOffsetZ)
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3994 = root || new pc.ParticleSystemNoise()
  var i3995 = data
  i3994.enabled = !!i3995[0]
  i3994.separateAxes = !!i3995[1]
  i3994.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[2], i3994.strengthX)
  i3994.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[3], i3994.strengthY)
  i3994.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[4], i3994.strengthZ)
  i3994.frequency = i3995[5]
  i3994.damping = !!i3995[6]
  i3994.octaveCount = i3995[7]
  i3994.octaveMultiplier = i3995[8]
  i3994.octaveScale = i3995[9]
  i3994.quality = i3995[10]
  i3994.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[11], i3994.scrollSpeed)
  i3994.scrollSpeedMultiplier = i3995[12]
  i3994.remapEnabled = !!i3995[13]
  i3994.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[14], i3994.remapX)
  i3994.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[15], i3994.remapY)
  i3994.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[16], i3994.remapZ)
  i3994.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[17], i3994.positionAmount)
  i3994.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[18], i3994.rotationAmount)
  i3994.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3995[19], i3994.sizeAmount)
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3996 = root || new pc.ParticleSystemInheritVelocity()
  var i3997 = data
  i3996.enabled = !!i3997[0]
  i3996.mode = i3997[1]
  i3996.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3997[2], i3996.curve)
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3998 = root || new pc.ParticleSystemForceOverLifetime()
  var i3999 = data
  i3998.enabled = !!i3999[0]
  i3998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3999[1], i3998.x)
  i3998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3999[2], i3998.y)
  i3998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3999[3], i3998.z)
  i3998.space = i3999[4]
  i3998.randomized = !!i3999[5]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4000 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4001 = data
  i4000.enabled = !!i4001[0]
  i4000.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4001[1], i4000.limit)
  i4000.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4001[2], i4000.limitX)
  i4000.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4001[3], i4000.limitY)
  i4000.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4001[4], i4000.limitZ)
  i4000.dampen = i4001[5]
  i4000.separateAxes = !!i4001[6]
  i4000.space = i4001[7]
  i4000.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4001[8], i4000.drag)
  i4000.multiplyDragByParticleSize = !!i4001[9]
  i4000.multiplyDragByParticleVelocity = !!i4001[10]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4003 = data
  i4002.enabled = !!i4003[0]
  request.r(i4003[1], i4003[2], 0, i4002, 'sharedMaterial')
  var i4005 = i4003[3]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 2) {
  request.r(i4005[i + 0], i4005[i + 1], 2, i4004, '')
  }
  i4002.sharedMaterials = i4004
  i4002.receiveShadows = !!i4003[4]
  i4002.shadowCastingMode = i4003[5]
  i4002.sortingLayerID = i4003[6]
  i4002.sortingOrder = i4003[7]
  i4002.lightmapIndex = i4003[8]
  i4002.lightmapSceneIndex = i4003[9]
  i4002.lightmapScaleOffset = new pc.Vec4( i4003[10], i4003[11], i4003[12], i4003[13] )
  i4002.lightProbeUsage = i4003[14]
  i4002.reflectionProbeUsage = i4003[15]
  request.r(i4003[16], i4003[17], 0, i4002, 'mesh')
  i4002.meshCount = i4003[18]
  i4002.activeVertexStreamsCount = i4003[19]
  i4002.alignment = i4003[20]
  i4002.renderMode = i4003[21]
  i4002.sortMode = i4003[22]
  i4002.lengthScale = i4003[23]
  i4002.velocityScale = i4003[24]
  i4002.cameraVelocityScale = i4003[25]
  i4002.normalDirection = i4003[26]
  i4002.sortingFudge = i4003[27]
  i4002.minParticleSize = i4003[28]
  i4002.maxParticleSize = i4003[29]
  i4002.pivot = new pc.Vec3( i4003[30], i4003[31], i4003[32] )
  request.r(i4003[33], i4003[34], 0, i4002, 'trailMaterial')
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4007 = data
  i4006.name = i4007[0]
  i4006.tagId = i4007[1]
  i4006.enabled = !!i4007[2]
  i4006.isStatic = !!i4007[3]
  i4006.layer = i4007[4]
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4009 = data
  i4008.name = i4009[0]
  i4008.width = i4009[1]
  i4008.height = i4009[2]
  i4008.mipmapCount = i4009[3]
  i4008.anisoLevel = i4009[4]
  i4008.filterMode = i4009[5]
  i4008.hdr = !!i4009[6]
  i4008.format = i4009[7]
  i4008.wrapMode = i4009[8]
  i4008.alphaIsTransparency = !!i4009[9]
  i4008.alphaSource = i4009[10]
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4011 = data
  i4010.pivot = new pc.Vec2( i4011[0], i4011[1] )
  i4010.anchorMin = new pc.Vec2( i4011[2], i4011[3] )
  i4010.anchorMax = new pc.Vec2( i4011[4], i4011[5] )
  i4010.sizeDelta = new pc.Vec2( i4011[6], i4011[7] )
  i4010.anchoredPosition3D = new pc.Vec3( i4011[8], i4011[9], i4011[10] )
  i4010.rotation = new pc.Quat(i4011[11], i4011[12], i4011[13], i4011[14])
  i4010.scale = new pc.Vec3( i4011[15], i4011[16], i4011[17] )
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4013 = data
  i4012.cullTransparentMesh = !!i4013[0]
  return i4012
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4014 = root || request.c( 'UnityEngine.UI.Image' )
  var i4015 = data
  request.r(i4015[0], i4015[1], 0, i4014, 'm_Sprite')
  i4014.m_Type = i4015[2]
  i4014.m_PreserveAspect = !!i4015[3]
  i4014.m_FillCenter = !!i4015[4]
  i4014.m_FillMethod = i4015[5]
  i4014.m_FillAmount = i4015[6]
  i4014.m_FillClockwise = !!i4015[7]
  i4014.m_FillOrigin = i4015[8]
  i4014.m_UseSpriteMesh = !!i4015[9]
  i4014.m_PixelsPerUnitMultiplier = i4015[10]
  request.r(i4015[11], i4015[12], 0, i4014, 'm_Material')
  i4014.m_Maskable = !!i4015[13]
  i4014.m_Color = new pc.Color(i4015[14], i4015[15], i4015[16], i4015[17])
  i4014.m_RaycastTarget = !!i4015[18]
  i4014.m_RaycastPadding = new pc.Vec4( i4015[19], i4015[20], i4015[21], i4015[22] )
  return i4014
}

Deserializers["CrackedLog"] = function (request, data, root) {
  var i4016 = root || request.c( 'CrackedLog' )
  var i4017 = data
  i4016.min_force = i4017[0]
  i4016.max_force = i4017[1]
  i4016.min_torque = i4017[2]
  i4016.max_torque = i4017[3]
  var i4019 = i4017[4]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( request.d('CrackedLogForce', i4019[i + 0]) );
  }
  i4016.pieces = i4018
  var i4021 = i4017[5]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('CrackedLogForce', i4021[i + 0]) );
  }
  i4016.knives = i4020
  return i4016
}

Deserializers["CrackedLogForce"] = function (request, data, root) {
  var i4024 = root || request.c( 'CrackedLogForce' )
  var i4025 = data
  request.r(i4025[0], i4025[1], 0, i4024, 'rb')
  i4024.min_X = i4025[2]
  i4024.max_X = i4025[3]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4027 = data
  i4026.usedByComposite = !!i4027[0]
  i4026.autoTiling = !!i4027[1]
  i4026.size = new pc.Vec2( i4027[2], i4027[3] )
  i4026.edgeRadius = i4027[4]
  i4026.enabled = !!i4027[5]
  i4026.isTrigger = !!i4027[6]
  i4026.usedByEffector = !!i4027[7]
  i4026.density = i4027[8]
  i4026.offset = new pc.Vec2( i4027[9], i4027[10] )
  request.r(i4027[11], i4027[12], 0, i4026, 'material')
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4029 = data
  i4028.name = i4029[0]
  i4028.atlasId = i4029[1]
  i4028.mipmapCount = i4029[2]
  i4028.hdr = !!i4029[3]
  i4028.size = i4029[4]
  i4028.anisoLevel = i4029[5]
  i4028.filterMode = i4029[6]
  i4028.wrapMode = i4029[7]
  var i4031 = i4029[8]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 4) {
    i4030.push( UnityEngine.Rect.MinMaxRect(i4031[i + 0], i4031[i + 1], i4031[i + 2], i4031[i + 3]) );
  }
  i4028.rects = i4030
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4035 = data
  i4034.name = i4035[0]
  i4034.index = i4035[1]
  i4034.startup = !!i4035[2]
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4037 = data
  i4036.enabled = !!i4037[0]
  i4036.aspect = i4037[1]
  i4036.orthographic = !!i4037[2]
  i4036.orthographicSize = i4037[3]
  i4036.backgroundColor = new pc.Color(i4037[4], i4037[5], i4037[6], i4037[7])
  i4036.nearClipPlane = i4037[8]
  i4036.farClipPlane = i4037[9]
  i4036.fieldOfView = i4037[10]
  i4036.depth = i4037[11]
  i4036.clearFlags = i4037[12]
  i4036.cullingMask = i4037[13]
  i4036.rect = i4037[14]
  request.r(i4037[15], i4037[16], 0, i4036, 'targetTexture')
  i4036.usePhysicalProperties = !!i4037[17]
  i4036.focalLength = i4037[18]
  i4036.sensorSize = new pc.Vec2( i4037[19], i4037[20] )
  i4036.lensShift = new pc.Vec2( i4037[21], i4037[22] )
  i4036.gateFit = i4037[23]
  return i4036
}

Deserializers["PlayableAdManager"] = function (request, data, root) {
  var i4038 = root || request.c( 'PlayableAdManager' )
  var i4039 = data
  request.r(i4039[0], i4039[1], 0, i4038, 'log')
  request.r(i4039[2], i4039[3], 0, i4038, 'backgroundImg')
  request.r(i4039[4], i4039[5], 0, i4038, 'backgroundSprite')
  request.r(i4039[6], i4039[7], 0, i4038, 'gameIconImg')
  request.r(i4039[8], i4039[9], 0, i4038, 'gameIconSprite')
  request.r(i4039[10], i4039[11], 0, i4038, 'clickUI')
  request.r(i4039[12], i4039[13], 0, i4038, 'gameEndPanelAimController')
  request.r(i4039[14], i4039[15], 0, i4038, 'installBtnAnimController')
  request.r(i4039[16], i4039[17], 0, i4038, 'knifeController')
  i4038.gameEndPanelColor = new pc.Color(i4039[18], i4039[19], i4039[20], i4039[21])
  i4038.gameNameText = i4039[22]
  i4038.gameNameTextColor = new pc.Color(i4039[23], i4039[24], i4039[25], i4039[26])
  i4038.installBtnColor = new pc.Color(i4039[27], i4039[28], i4039[29], i4039[30])
  i4038.installBtnText = i4039[31]
  i4038.installBtnTextColor = new pc.Color(i4039[32], i4039[33], i4039[34], i4039[35])
  i4038.url = i4039[36]
  request.r(i4039[37], i4039[38], 0, i4038, 'gameEndPanelImg')
  request.r(i4039[39], i4039[40], 0, i4038, 'installBtn')
  request.r(i4039[41], i4039[42], 0, i4038, 'installBtnTMP')
  request.r(i4039[43], i4039[44], 0, i4038, 'gameNameTMP')
  request.r(i4039[45], i4039[46], 0, i4038, 'gamePlayPanel')
  request.r(i4039[47], i4039[48], 0, i4038, 'gameEndPanel')
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4041 = data
  i4040.enabled = !!i4041[0]
  i4040.planeDistance = i4041[1]
  i4040.referencePixelsPerUnit = i4041[2]
  i4040.isFallbackOverlay = !!i4041[3]
  i4040.renderMode = i4041[4]
  i4040.renderOrder = i4041[5]
  i4040.sortingLayerName = i4041[6]
  i4040.sortingOrder = i4041[7]
  i4040.scaleFactor = i4041[8]
  request.r(i4041[9], i4041[10], 0, i4040, 'worldCamera')
  i4040.overrideSorting = !!i4041[11]
  i4040.pixelPerfect = !!i4041[12]
  i4040.targetDisplay = i4041[13]
  i4040.overridePixelPerfect = !!i4041[14]
  return i4040
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4042 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4043 = data
  i4042.m_UiScaleMode = i4043[0]
  i4042.m_ReferencePixelsPerUnit = i4043[1]
  i4042.m_ScaleFactor = i4043[2]
  i4042.m_ReferenceResolution = new pc.Vec2( i4043[3], i4043[4] )
  i4042.m_ScreenMatchMode = i4043[5]
  i4042.m_MatchWidthOrHeight = i4043[6]
  i4042.m_PhysicalUnit = i4043[7]
  i4042.m_FallbackScreenDPI = i4043[8]
  i4042.m_DefaultSpriteDPI = i4043[9]
  i4042.m_DynamicPixelsPerUnit = i4043[10]
  i4042.m_PresetInfoIsWorld = !!i4043[11]
  return i4042
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4044 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4045 = data
  i4044.m_IgnoreReversedGraphics = !!i4045[0]
  i4044.m_BlockingObjects = i4045[1]
  i4044.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4045[2] )
  return i4044
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i4046 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i4047 = data
  i4046.m_Spacing = i4047[0]
  i4046.m_ChildForceExpandWidth = !!i4047[1]
  i4046.m_ChildForceExpandHeight = !!i4047[2]
  i4046.m_ChildControlWidth = !!i4047[3]
  i4046.m_ChildControlHeight = !!i4047[4]
  i4046.m_ChildScaleWidth = !!i4047[5]
  i4046.m_ChildScaleHeight = !!i4047[6]
  i4046.m_ReverseArrangement = !!i4047[7]
  i4046.m_Padding = UnityEngine.RectOffset.FromPaddings(i4047[8], i4047[9], i4047[10], i4047[11])
  i4046.m_ChildAlignment = i4047[12]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4049 = data
  request.r(i4049[0], i4049[1], 0, i4048, 'animatorController')
  request.r(i4049[2], i4049[3], 0, i4048, 'avatar')
  i4048.updateMode = i4049[4]
  i4048.hasTransformHierarchy = !!i4049[5]
  var i4051 = i4049[6]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 2) {
  request.r(i4051[i + 0], i4051[i + 1], 2, i4050, '')
  }
  i4048.humanBones = i4050
  i4048.enabled = !!i4049[7]
  return i4048
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i4054 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i4055 = data
  i4054.m_EffectColor = new pc.Color(i4055[0], i4055[1], i4055[2], i4055[3])
  i4054.m_EffectDistance = new pc.Vec2( i4055[4], i4055[5] )
  i4054.m_UseGraphicAlpha = !!i4055[6]
  return i4054
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4056 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4057 = data
  i4056.m_hasFontAssetChanged = !!i4057[0]
  request.r(i4057[1], i4057[2], 0, i4056, 'm_baseMaterial')
  i4056.m_maskOffset = new pc.Vec4( i4057[3], i4057[4], i4057[5], i4057[6] )
  i4056.m_text = i4057[7]
  i4056.m_isRightToLeft = !!i4057[8]
  request.r(i4057[9], i4057[10], 0, i4056, 'm_fontAsset')
  request.r(i4057[11], i4057[12], 0, i4056, 'm_sharedMaterial')
  var i4059 = i4057[13]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 2) {
  request.r(i4059[i + 0], i4059[i + 1], 2, i4058, '')
  }
  i4056.m_fontSharedMaterials = i4058
  request.r(i4057[14], i4057[15], 0, i4056, 'm_fontMaterial')
  var i4061 = i4057[16]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 2) {
  request.r(i4061[i + 0], i4061[i + 1], 2, i4060, '')
  }
  i4056.m_fontMaterials = i4060
  i4056.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4057[17], i4057[18], i4057[19], i4057[20])
  i4056.m_fontColor = new pc.Color(i4057[21], i4057[22], i4057[23], i4057[24])
  i4056.m_enableVertexGradient = !!i4057[25]
  i4056.m_colorMode = i4057[26]
  i4056.m_fontColorGradient = request.d('TMPro.VertexGradient', i4057[27], i4056.m_fontColorGradient)
  request.r(i4057[28], i4057[29], 0, i4056, 'm_fontColorGradientPreset')
  request.r(i4057[30], i4057[31], 0, i4056, 'm_spriteAsset')
  i4056.m_tintAllSprites = !!i4057[32]
  request.r(i4057[33], i4057[34], 0, i4056, 'm_StyleSheet')
  i4056.m_TextStyleHashCode = i4057[35]
  i4056.m_overrideHtmlColors = !!i4057[36]
  i4056.m_faceColor = UnityEngine.Color32.ConstructColor(i4057[37], i4057[38], i4057[39], i4057[40])
  i4056.m_fontSize = i4057[41]
  i4056.m_fontSizeBase = i4057[42]
  i4056.m_fontWeight = i4057[43]
  i4056.m_enableAutoSizing = !!i4057[44]
  i4056.m_fontSizeMin = i4057[45]
  i4056.m_fontSizeMax = i4057[46]
  i4056.m_fontStyle = i4057[47]
  i4056.m_HorizontalAlignment = i4057[48]
  i4056.m_VerticalAlignment = i4057[49]
  i4056.m_textAlignment = i4057[50]
  i4056.m_characterSpacing = i4057[51]
  i4056.m_wordSpacing = i4057[52]
  i4056.m_lineSpacing = i4057[53]
  i4056.m_lineSpacingMax = i4057[54]
  i4056.m_paragraphSpacing = i4057[55]
  i4056.m_charWidthMaxAdj = i4057[56]
  i4056.m_enableWordWrapping = !!i4057[57]
  i4056.m_wordWrappingRatios = i4057[58]
  i4056.m_overflowMode = i4057[59]
  request.r(i4057[60], i4057[61], 0, i4056, 'm_linkedTextComponent')
  request.r(i4057[62], i4057[63], 0, i4056, 'parentLinkedComponent')
  i4056.m_enableKerning = !!i4057[64]
  i4056.m_enableExtraPadding = !!i4057[65]
  i4056.checkPaddingRequired = !!i4057[66]
  i4056.m_isRichText = !!i4057[67]
  i4056.m_parseCtrlCharacters = !!i4057[68]
  i4056.m_isOrthographic = !!i4057[69]
  i4056.m_isCullingEnabled = !!i4057[70]
  i4056.m_horizontalMapping = i4057[71]
  i4056.m_verticalMapping = i4057[72]
  i4056.m_uvLineOffset = i4057[73]
  i4056.m_geometrySortingOrder = i4057[74]
  i4056.m_IsTextObjectScaleStatic = !!i4057[75]
  i4056.m_VertexBufferAutoSizeReduction = !!i4057[76]
  i4056.m_useMaxVisibleDescender = !!i4057[77]
  i4056.m_pageToDisplay = i4057[78]
  i4056.m_margin = new pc.Vec4( i4057[79], i4057[80], i4057[81], i4057[82] )
  i4056.m_isUsingLegacyAnimationComponent = !!i4057[83]
  i4056.m_isVolumetricText = !!i4057[84]
  request.r(i4057[85], i4057[86], 0, i4056, 'm_Material')
  i4056.m_Maskable = !!i4057[87]
  i4056.m_Color = new pc.Color(i4057[88], i4057[89], i4057[90], i4057[91])
  i4056.m_RaycastTarget = !!i4057[92]
  i4056.m_RaycastPadding = new pc.Vec4( i4057[93], i4057[94], i4057[95], i4057[96] )
  return i4056
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4062 = root || request.c( 'TMPro.VertexGradient' )
  var i4063 = data
  i4062.topLeft = new pc.Color(i4063[0], i4063[1], i4063[2], i4063[3])
  i4062.topRight = new pc.Color(i4063[4], i4063[5], i4063[6], i4063[7])
  i4062.bottomLeft = new pc.Color(i4063[8], i4063[9], i4063[10], i4063[11])
  i4062.bottomRight = new pc.Color(i4063[12], i4063[13], i4063[14], i4063[15])
  return i4062
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4064 = root || request.c( 'UnityEngine.UI.Button' )
  var i4065 = data
  i4064.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4065[0], i4064.m_OnClick)
  i4064.m_Navigation = request.d('UnityEngine.UI.Navigation', i4065[1], i4064.m_Navigation)
  i4064.m_Transition = i4065[2]
  i4064.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4065[3], i4064.m_Colors)
  i4064.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4065[4], i4064.m_SpriteState)
  i4064.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4065[5], i4064.m_AnimationTriggers)
  i4064.m_Interactable = !!i4065[6]
  request.r(i4065[7], i4065[8], 0, i4064, 'm_TargetGraphic')
  return i4064
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4066 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4067 = data
  i4066.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4067[0], i4066.m_PersistentCalls)
  return i4066
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4068 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4069 = data
  var i4071 = i4069[0]
  var i4070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.add(request.d('UnityEngine.Events.PersistentCall', i4071[i + 0]));
  }
  i4068.m_Calls = i4070
  return i4068
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4074 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4075 = data
  request.r(i4075[0], i4075[1], 0, i4074, 'm_Target')
  i4074.m_TargetAssemblyTypeName = i4075[2]
  i4074.m_MethodName = i4075[3]
  i4074.m_Mode = i4075[4]
  i4074.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4075[5], i4074.m_Arguments)
  i4074.m_CallState = i4075[6]
  return i4074
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4076 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4077 = data
  request.r(i4077[0], i4077[1], 0, i4076, 'm_ObjectArgument')
  i4076.m_ObjectArgumentAssemblyTypeName = i4077[2]
  i4076.m_IntArgument = i4077[3]
  i4076.m_FloatArgument = i4077[4]
  i4076.m_StringArgument = i4077[5]
  i4076.m_BoolArgument = !!i4077[6]
  return i4076
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4078 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4079 = data
  i4078.m_Mode = i4079[0]
  i4078.m_WrapAround = !!i4079[1]
  request.r(i4079[2], i4079[3], 0, i4078, 'm_SelectOnUp')
  request.r(i4079[4], i4079[5], 0, i4078, 'm_SelectOnDown')
  request.r(i4079[6], i4079[7], 0, i4078, 'm_SelectOnLeft')
  request.r(i4079[8], i4079[9], 0, i4078, 'm_SelectOnRight')
  return i4078
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4080 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4081 = data
  i4080.m_NormalColor = new pc.Color(i4081[0], i4081[1], i4081[2], i4081[3])
  i4080.m_HighlightedColor = new pc.Color(i4081[4], i4081[5], i4081[6], i4081[7])
  i4080.m_PressedColor = new pc.Color(i4081[8], i4081[9], i4081[10], i4081[11])
  i4080.m_SelectedColor = new pc.Color(i4081[12], i4081[13], i4081[14], i4081[15])
  i4080.m_DisabledColor = new pc.Color(i4081[16], i4081[17], i4081[18], i4081[19])
  i4080.m_ColorMultiplier = i4081[20]
  i4080.m_FadeDuration = i4081[21]
  return i4080
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4082 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4083 = data
  request.r(i4083[0], i4083[1], 0, i4082, 'm_HighlightedSprite')
  request.r(i4083[2], i4083[3], 0, i4082, 'm_PressedSprite')
  request.r(i4083[4], i4083[5], 0, i4082, 'm_SelectedSprite')
  request.r(i4083[6], i4083[7], 0, i4082, 'm_DisabledSprite')
  return i4082
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4084 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4085 = data
  i4084.m_NormalTrigger = i4085[0]
  i4084.m_HighlightedTrigger = i4085[1]
  i4084.m_PressedTrigger = i4085[2]
  i4084.m_SelectedTrigger = i4085[3]
  i4084.m_DisabledTrigger = i4085[4]
  return i4084
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4086 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4087 = data
  request.r(i4087[0], i4087[1], 0, i4086, 'm_FirstSelected')
  i4086.m_sendNavigationEvents = !!i4087[2]
  i4086.m_DragThreshold = i4087[3]
  return i4086
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4088 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4089 = data
  i4088.m_HorizontalAxis = i4089[0]
  i4088.m_VerticalAxis = i4089[1]
  i4088.m_SubmitButton = i4089[2]
  i4088.m_CancelButton = i4089[3]
  i4088.m_InputActionsPerSecond = i4089[4]
  i4088.m_RepeatDelay = i4089[5]
  i4088.m_ForceModuleActive = !!i4089[6]
  i4088.m_SendPointerHoverToParent = !!i4089[7]
  return i4088
}

Deserializers["KnifeController"] = function (request, data, root) {
  var i4090 = root || request.c( 'KnifeController' )
  var i4091 = data
  request.r(i4091[0], i4091[1], 0, i4090, 'knifePrefab')
  var i4093 = i4091[2]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 2) {
  request.r(i4093[i + 0], i4093[i + 1], 2, i4092, '')
  }
  i4090.knivesPool = i4092
  request.r(i4091[3], i4091[4], 0, i4090, 'knivesPoolPos')
  request.r(i4091[5], i4091[6], 0, i4090, 'availableKnivesList')
  request.r(i4091[7], i4091[8], 0, i4090, 'availableKnifeUIPrefab')
  var i4095 = i4091[9]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 2) {
  request.r(i4095[i + 0], i4095[i + 1], 2, i4094, '')
  }
  i4090.availableKnivesUI = i4094
  i4090.usedKnifeColor = new pc.Color(i4091[10], i4091[11], i4091[12], i4091[13])
  i4090.currKnifeIndex = i4091[14]
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4099 = data
  i4098.radius = i4099[0]
  i4098.enabled = !!i4099[1]
  i4098.isTrigger = !!i4099[2]
  i4098.usedByEffector = !!i4099[3]
  i4098.density = i4099[4]
  i4098.offset = new pc.Vec2( i4099[5], i4099[6] )
  request.r(i4099[7], i4099[8], 0, i4098, 'material')
  return i4098
}

Deserializers["Log"] = function (request, data, root) {
  var i4100 = root || request.c( 'Log' )
  var i4101 = data
  request.r(i4101[0], i4101[1], 0, i4100, 'spriteRenderer')
  request.r(i4101[2], i4101[3], 0, i4100, 'animController')
  request.r(i4101[4], i4101[5], 0, i4100, 'selectedKnifeSprite')
  request.r(i4101[6], i4101[7], 0, i4100, 'crackedLog')
  i4100.minRotateTimer = i4101[8]
  i4100.maxRotateTimer = i4101[9]
  i4100.minRotateSpeed = i4101[10]
  i4100.maxRotateSpeed = i4101[11]
  i4100.stationaryPos = new pc.Vec3( i4101[12], i4101[13], i4101[14] )
  i4100.hitPos = new pc.Vec3( i4101[15], i4101[16], i4101[17] )
  i4100.stationaryColor = new pc.Color(i4101[18], i4101[19], i4101[20], i4101[21])
  i4100.hitColor = new pc.Color(i4101[22], i4101[23], i4101[24], i4101[25])
  return i4100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4103 = data
  i4102.ambientIntensity = i4103[0]
  i4102.reflectionIntensity = i4103[1]
  i4102.ambientMode = i4103[2]
  i4102.ambientLight = new pc.Color(i4103[3], i4103[4], i4103[5], i4103[6])
  i4102.ambientSkyColor = new pc.Color(i4103[7], i4103[8], i4103[9], i4103[10])
  i4102.ambientGroundColor = new pc.Color(i4103[11], i4103[12], i4103[13], i4103[14])
  i4102.ambientEquatorColor = new pc.Color(i4103[15], i4103[16], i4103[17], i4103[18])
  i4102.fogColor = new pc.Color(i4103[19], i4103[20], i4103[21], i4103[22])
  i4102.fogEndDistance = i4103[23]
  i4102.fogStartDistance = i4103[24]
  i4102.fogDensity = i4103[25]
  i4102.fog = !!i4103[26]
  request.r(i4103[27], i4103[28], 0, i4102, 'skybox')
  i4102.fogMode = i4103[29]
  var i4105 = i4103[30]
  var i4104 = []
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4105[i + 0]) );
  }
  i4102.lightmaps = i4104
  i4102.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4103[31], i4102.lightProbes)
  i4102.lightmapsMode = i4103[32]
  i4102.mixedBakeMode = i4103[33]
  i4102.environmentLightingMode = i4103[34]
  i4102.ambientProbe = new pc.SphericalHarmonicsL2(i4103[35])
  i4102.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4103[36])
  i4102.useReferenceAmbientProbe = !!i4103[37]
  request.r(i4103[38], i4103[39], 0, i4102, 'customReflection')
  request.r(i4103[40], i4103[41], 0, i4102, 'defaultReflection')
  i4102.defaultReflectionMode = i4103[42]
  i4102.defaultReflectionResolution = i4103[43]
  i4102.sunLightObjectId = i4103[44]
  i4102.pixelLightCount = i4103[45]
  i4102.defaultReflectionHDR = !!i4103[46]
  i4102.hasLightDataAsset = !!i4103[47]
  i4102.hasManualGenerate = !!i4103[48]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4109 = data
  request.r(i4109[0], i4109[1], 0, i4108, 'lightmapColor')
  request.r(i4109[2], i4109[3], 0, i4108, 'lightmapDirection')
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4110 = root || new UnityEngine.LightProbes()
  var i4111 = data
  return i4110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4119 = data
  var i4121 = i4119[0]
  var i4120 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4121[i + 0]));
  }
  i4118.ShaderCompilationErrors = i4120
  i4118.name = i4119[1]
  i4118.guid = i4119[2]
  var i4123 = i4119[3]
  var i4122 = []
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.push( i4123[i + 0] );
  }
  i4118.shaderDefinedKeywords = i4122
  var i4125 = i4119[4]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4125[i + 0]) );
  }
  i4118.passes = i4124
  var i4127 = i4119[5]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4127[i + 0]) );
  }
  i4118.usePasses = i4126
  var i4129 = i4119[6]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4129[i + 0]) );
  }
  i4118.defaultParameterValues = i4128
  request.r(i4119[7], i4119[8], 0, i4118, 'unityFallbackShader')
  i4118.readDepth = !!i4119[9]
  i4118.isCreatedByShaderGraph = !!i4119[10]
  i4118.usedBatchUniforms = i4119[11]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4133 = data
  i4132.shaderName = i4133[0]
  i4132.errorMessage = i4133[1]
  return i4132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4138 = root || new pc.UnityShaderPass()
  var i4139 = data
  i4138.id = i4139[0]
  i4138.subShaderIndex = i4139[1]
  i4138.name = i4139[2]
  i4138.passType = i4139[3]
  i4138.grabPassTextureName = i4139[4]
  i4138.usePass = !!i4139[5]
  i4138.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[6], i4138.zTest)
  i4138.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[7], i4138.zWrite)
  i4138.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[8], i4138.culling)
  i4138.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4139[9], i4138.blending)
  i4138.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4139[10], i4138.alphaBlending)
  i4138.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[11], i4138.colorWriteMask)
  i4138.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[12], i4138.offsetUnits)
  i4138.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[13], i4138.offsetFactor)
  i4138.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[14], i4138.stencilRef)
  i4138.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[15], i4138.stencilReadMask)
  i4138.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4139[16], i4138.stencilWriteMask)
  i4138.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4139[17], i4138.stencilOp)
  i4138.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4139[18], i4138.stencilOpFront)
  i4138.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4139[19], i4138.stencilOpBack)
  var i4141 = i4139[20]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4141[i + 0]) );
  }
  i4138.tags = i4140
  var i4143 = i4139[21]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( i4143[i + 0] );
  }
  i4138.passDefinedKeywords = i4142
  var i4145 = i4139[22]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4145[i + 0]) );
  }
  i4138.passDefinedKeywordGroups = i4144
  var i4147 = i4139[23]
  var i4146 = []
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4147[i + 0]) );
  }
  i4138.variants = i4146
  var i4149 = i4139[24]
  var i4148 = []
  for(var i = 0; i < i4149.length; i += 1) {
    i4148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4149[i + 0]) );
  }
  i4138.excludedVariants = i4148
  i4138.hasDepthReader = !!i4139[25]
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4151 = data
  i4150.val = i4151[0]
  i4150.name = i4151[1]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4153 = data
  i4152.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[0], i4152.src)
  i4152.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[1], i4152.dst)
  i4152.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[2], i4152.op)
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4155 = data
  i4154.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4155[0], i4154.pass)
  i4154.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4155[1], i4154.fail)
  i4154.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4155[2], i4154.zFail)
  i4154.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4155[3], i4154.comp)
  return i4154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4159 = data
  i4158.name = i4159[0]
  i4158.value = i4159[1]
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4163 = data
  var i4165 = i4163[0]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( i4165[i + 0] );
  }
  i4162.keywords = i4164
  i4162.hasDiscard = !!i4163[1]
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4169 = data
  i4168.passId = i4169[0]
  i4168.subShaderIndex = i4169[1]
  var i4171 = i4169[2]
  var i4170 = []
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.push( i4171[i + 0] );
  }
  i4168.keywords = i4170
  i4168.vertexProgram = i4169[3]
  i4168.fragmentProgram = i4169[4]
  i4168.readDepth = !!i4169[5]
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4175 = data
  request.r(i4175[0], i4175[1], 0, i4174, 'shader')
  i4174.pass = i4175[2]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4179 = data
  i4178.name = i4179[0]
  i4178.type = i4179[1]
  i4178.value = new pc.Vec4( i4179[2], i4179[3], i4179[4], i4179[5] )
  i4178.textureValue = i4179[6]
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4181 = data
  i4180.name = i4181[0]
  request.r(i4181[1], i4181[2], 0, i4180, 'texture')
  i4180.aabb = i4181[3]
  i4180.vertices = i4181[4]
  i4180.triangles = i4181[5]
  i4180.textureRect = UnityEngine.Rect.MinMaxRect(i4181[6], i4181[7], i4181[8], i4181[9])
  i4180.packedRect = UnityEngine.Rect.MinMaxRect(i4181[10], i4181[11], i4181[12], i4181[13])
  i4180.border = new pc.Vec4( i4181[14], i4181[15], i4181[16], i4181[17] )
  i4180.transparency = i4181[18]
  i4180.bounds = i4181[19]
  i4180.pixelsPerUnit = i4181[20]
  i4180.textureWidth = i4181[21]
  i4180.textureHeight = i4181[22]
  i4180.nativeSize = new pc.Vec2( i4181[23], i4181[24] )
  i4180.pivot = new pc.Vec2( i4181[25], i4181[26] )
  i4180.textureRectOffset = new pc.Vec2( i4181[27], i4181[28] )
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4183 = data
  i4182.name = i4183[0]
  i4182.wrapMode = i4183[1]
  i4182.isLooping = !!i4183[2]
  i4182.length = i4183[3]
  var i4185 = i4183[4]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4185[i + 0]) );
  }
  i4182.curves = i4184
  var i4187 = i4183[5]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4187[i + 0]) );
  }
  i4182.events = i4186
  i4182.halfPrecision = !!i4183[6]
  i4182.frameRate = i4183[7]
  i4182.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4183[8], i4182.localBounds)
  i4182.hasMuscleCurves = !!i4183[9]
  var i4189 = i4183[10]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.push( i4189[i + 0] );
  }
  i4182.clipMuscleConstant = i4188
  i4182.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4183[11], i4182.clipBindingConstant)
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4193 = data
  i4192.path = i4193[0]
  i4192.componentType = i4193[1]
  i4192.property = i4193[2]
  i4192.keys = i4193[3]
  var i4195 = i4193[4]
  var i4194 = []
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4195[i + 0]) );
  }
  i4192.objectReferenceKeys = i4194
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4199 = data
  i4198.time = i4199[0]
  request.r(i4199[1], i4199[2], 0, i4198, 'value')
  return i4198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4203 = data
  i4202.functionName = i4203[0]
  i4202.floatParameter = i4203[1]
  i4202.intParameter = i4203[2]
  i4202.stringParameter = i4203[3]
  request.r(i4203[4], i4203[5], 0, i4202, 'objectReferenceParameter')
  i4202.time = i4203[6]
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4205 = data
  i4204.center = new pc.Vec3( i4205[0], i4205[1], i4205[2] )
  i4204.extends = new pc.Vec3( i4205[3], i4205[4], i4205[5] )
  return i4204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4209 = data
  var i4211 = i4209[0]
  var i4210 = []
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.push( i4211[i + 0] );
  }
  i4208.genericBindings = i4210
  var i4213 = i4209[1]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 1) {
    i4212.push( i4213[i + 0] );
  }
  i4208.pptrCurveMapping = i4212
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4215 = data
  i4214.name = i4215[0]
  i4214.ascent = i4215[1]
  i4214.originalLineHeight = i4215[2]
  i4214.fontSize = i4215[3]
  var i4217 = i4215[4]
  var i4216 = []
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4217[i + 0]) );
  }
  i4214.characterInfo = i4216
  request.r(i4215[5], i4215[6], 0, i4214, 'texture')
  i4214.originalFontSize = i4215[7]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4221 = data
  i4220.index = i4221[0]
  i4220.advance = i4221[1]
  i4220.bearing = i4221[2]
  i4220.glyphWidth = i4221[3]
  i4220.glyphHeight = i4221[4]
  i4220.minX = i4221[5]
  i4220.maxX = i4221[6]
  i4220.minY = i4221[7]
  i4220.maxY = i4221[8]
  i4220.uvBottomLeftX = i4221[9]
  i4220.uvBottomLeftY = i4221[10]
  i4220.uvBottomRightX = i4221[11]
  i4220.uvBottomRightY = i4221[12]
  i4220.uvTopLeftX = i4221[13]
  i4220.uvTopLeftY = i4221[14]
  i4220.uvTopRightX = i4221[15]
  i4220.uvTopRightY = i4221[16]
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4223 = data
  i4222.name = i4223[0]
  var i4225 = i4223[1]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4225[i + 0]) );
  }
  i4222.states = i4224
  var i4227 = i4223[2]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4227[i + 0]) );
  }
  i4222.layers = i4226
  var i4229 = i4223[3]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4229[i + 0]) );
  }
  i4222.parameters = i4228
  i4222.animationClips = i4223[4]
  i4222.HasSubStateMachines = !!i4223[5]
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4233 = data
  i4232.cycleOffset = i4233[0]
  i4232.cycleOffsetParameter = i4233[1]
  i4232.cycleOffsetParameterActive = !!i4233[2]
  i4232.mirror = !!i4233[3]
  i4232.mirrorParameter = i4233[4]
  i4232.mirrorParameterActive = !!i4233[5]
  i4232.motionId = i4233[6]
  i4232.nameHash = i4233[7]
  i4232.fullPathHash = i4233[8]
  i4232.speed = i4233[9]
  i4232.speedParameter = i4233[10]
  i4232.speedParameterActive = !!i4233[11]
  i4232.tag = i4233[12]
  i4232.name = i4233[13]
  i4232.layer = i4233[14]
  i4232.writeDefaultValues = !!i4233[15]
  var i4235 = i4233[16]
  var i4234 = []
  for(var i = 0; i < i4235.length; i += 1) {
    i4234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4235[i + 0]) );
  }
  i4232.transitions = i4234
  var i4237 = i4233[17]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 2) {
  request.r(i4237[i + 0], i4237[i + 1], 2, i4236, '')
  }
  i4232.behaviours = i4236
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4241 = data
  i4240.fullPath = i4241[0]
  i4240.canTransitionToSelf = !!i4241[1]
  i4240.duration = i4241[2]
  i4240.exitTime = i4241[3]
  i4240.hasExitTime = !!i4241[4]
  i4240.hasFixedDuration = !!i4241[5]
  i4240.interruptionSource = i4241[6]
  i4240.offset = i4241[7]
  i4240.orderedInterruption = !!i4241[8]
  i4240.destinationStateNameHash = i4241[9]
  i4240.destinationStateMachineId = i4241[10]
  i4240.isExit = !!i4241[11]
  i4240.mute = !!i4241[12]
  i4240.solo = !!i4241[13]
  var i4243 = i4241[14]
  var i4242 = []
  for(var i = 0; i < i4243.length; i += 1) {
    i4242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4243[i + 0]) );
  }
  i4240.conditions = i4242
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4247 = data
  i4246.mode = i4247[0]
  i4246.parameter = i4247[1]
  i4246.threshold = i4247[2]
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4253 = data
  i4252.blendingMode = i4253[0]
  i4252.defaultWeight = i4253[1]
  i4252.name = i4253[2]
  i4252.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4253[3], i4252.stateMachine)
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4255 = data
  i4254.id = i4255[0]
  i4254.defaultStateNameHash = i4255[1]
  var i4257 = i4255[2]
  var i4256 = []
  for(var i = 0; i < i4257.length; i += 1) {
    i4256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4257[i + 0]) );
  }
  i4254.entryTransitions = i4256
  var i4259 = i4255[3]
  var i4258 = []
  for(var i = 0; i < i4259.length; i += 1) {
    i4258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4259[i + 0]) );
  }
  i4254.anyStateTransitions = i4258
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4263 = data
  i4262.destinationStateNameHash = i4263[0]
  i4262.destinationStateMachineId = i4263[1]
  i4262.isExit = !!i4263[2]
  i4262.mute = !!i4263[3]
  i4262.solo = !!i4263[4]
  var i4265 = i4263[5]
  var i4264 = []
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4265[i + 0]) );
  }
  i4262.conditions = i4264
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4269 = data
  i4268.defaultBool = !!i4269[0]
  i4268.defaultFloat = i4269[1]
  i4268.defaultInt = i4269[2]
  i4268.name = i4269[3]
  i4268.nameHash = i4269[4]
  i4268.type = i4269[5]
  return i4268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4271 = data
  i4270.name = i4271[0]
  i4270.bytes64 = i4271[1]
  i4270.data = i4271[2]
  return i4270
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4272 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4273 = data
  i4272.hashCode = i4273[0]
  request.r(i4273[1], i4273[2], 0, i4272, 'material')
  i4272.materialHashCode = i4273[3]
  request.r(i4273[4], i4273[5], 0, i4272, 'atlas')
  i4272.normalStyle = i4273[6]
  i4272.normalSpacingOffset = i4273[7]
  i4272.boldStyle = i4273[8]
  i4272.boldSpacing = i4273[9]
  i4272.italicStyle = i4273[10]
  i4272.tabSize = i4273[11]
  i4272.m_Version = i4273[12]
  i4272.m_SourceFontFileGUID = i4273[13]
  request.r(i4273[14], i4273[15], 0, i4272, 'm_SourceFontFile_EditorRef')
  request.r(i4273[16], i4273[17], 0, i4272, 'm_SourceFontFile')
  i4272.m_AtlasPopulationMode = i4273[18]
  i4272.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4273[19], i4272.m_FaceInfo)
  var i4275 = i4273[20]
  var i4274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4275.length; i += 1) {
    i4274.add(request.d('UnityEngine.TextCore.Glyph', i4275[i + 0]));
  }
  i4272.m_GlyphTable = i4274
  var i4277 = i4273[21]
  var i4276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4277.length; i += 1) {
    i4276.add(request.d('TMPro.TMP_Character', i4277[i + 0]));
  }
  i4272.m_CharacterTable = i4276
  var i4279 = i4273[22]
  var i4278 = []
  for(var i = 0; i < i4279.length; i += 2) {
  request.r(i4279[i + 0], i4279[i + 1], 2, i4278, '')
  }
  i4272.m_AtlasTextures = i4278
  i4272.m_AtlasTextureIndex = i4273[23]
  i4272.m_IsMultiAtlasTexturesEnabled = !!i4273[24]
  i4272.m_ClearDynamicDataOnBuild = !!i4273[25]
  var i4281 = i4273[26]
  var i4280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.add(request.d('UnityEngine.TextCore.GlyphRect', i4281[i + 0]));
  }
  i4272.m_UsedGlyphRects = i4280
  var i4283 = i4273[27]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4283.length; i += 1) {
    i4282.add(request.d('UnityEngine.TextCore.GlyphRect', i4283[i + 0]));
  }
  i4272.m_FreeGlyphRects = i4282
  i4272.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4273[28], i4272.m_fontInfo)
  i4272.m_AtlasWidth = i4273[29]
  i4272.m_AtlasHeight = i4273[30]
  i4272.m_AtlasPadding = i4273[31]
  i4272.m_AtlasRenderMode = i4273[32]
  var i4285 = i4273[33]
  var i4284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.add(request.d('TMPro.TMP_Glyph', i4285[i + 0]));
  }
  i4272.m_glyphInfoList = i4284
  i4272.m_KerningTable = request.d('TMPro.KerningTable', i4273[34], i4272.m_KerningTable)
  i4272.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4273[35], i4272.m_FontFeatureTable)
  var i4287 = i4273[36]
  var i4286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4287.length; i += 2) {
  request.r(i4287[i + 0], i4287[i + 1], 1, i4286, '')
  }
  i4272.fallbackFontAssets = i4286
  var i4289 = i4273[37]
  var i4288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4289.length; i += 2) {
  request.r(i4289[i + 0], i4289[i + 1], 1, i4288, '')
  }
  i4272.m_FallbackFontAssetTable = i4288
  i4272.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4273[38], i4272.m_CreationSettings)
  var i4291 = i4273[39]
  var i4290 = []
  for(var i = 0; i < i4291.length; i += 1) {
    i4290.push( request.d('TMPro.TMP_FontWeightPair', i4291[i + 0]) );
  }
  i4272.m_FontWeightTable = i4290
  var i4293 = i4273[40]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( request.d('TMPro.TMP_FontWeightPair', i4293[i + 0]) );
  }
  i4272.fontWeights = i4292
  return i4272
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4294 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4295 = data
  i4294.m_FaceIndex = i4295[0]
  i4294.m_FamilyName = i4295[1]
  i4294.m_StyleName = i4295[2]
  i4294.m_PointSize = i4295[3]
  i4294.m_Scale = i4295[4]
  i4294.m_LineHeight = i4295[5]
  i4294.m_AscentLine = i4295[6]
  i4294.m_CapLine = i4295[7]
  i4294.m_MeanLine = i4295[8]
  i4294.m_Baseline = i4295[9]
  i4294.m_DescentLine = i4295[10]
  i4294.m_SuperscriptOffset = i4295[11]
  i4294.m_SuperscriptSize = i4295[12]
  i4294.m_SubscriptOffset = i4295[13]
  i4294.m_SubscriptSize = i4295[14]
  i4294.m_UnderlineOffset = i4295[15]
  i4294.m_UnderlineThickness = i4295[16]
  i4294.m_StrikethroughOffset = i4295[17]
  i4294.m_StrikethroughThickness = i4295[18]
  i4294.m_TabWidth = i4295[19]
  return i4294
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4298 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4299 = data
  i4298.m_Index = i4299[0]
  i4298.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4299[1], i4298.m_Metrics)
  i4298.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4299[2], i4298.m_GlyphRect)
  i4298.m_Scale = i4299[3]
  i4298.m_AtlasIndex = i4299[4]
  return i4298
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4300 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4301 = data
  i4300.m_Width = i4301[0]
  i4300.m_Height = i4301[1]
  i4300.m_HorizontalBearingX = i4301[2]
  i4300.m_HorizontalBearingY = i4301[3]
  i4300.m_HorizontalAdvance = i4301[4]
  return i4300
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4302 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4303 = data
  i4302.m_X = i4303[0]
  i4302.m_Y = i4303[1]
  i4302.m_Width = i4303[2]
  i4302.m_Height = i4303[3]
  return i4302
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4306 = root || request.c( 'TMPro.TMP_Character' )
  var i4307 = data
  i4306.m_ElementType = i4307[0]
  i4306.m_Unicode = i4307[1]
  i4306.m_GlyphIndex = i4307[2]
  i4306.m_Scale = i4307[3]
  return i4306
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4312 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4313 = data
  i4312.Name = i4313[0]
  i4312.PointSize = i4313[1]
  i4312.Scale = i4313[2]
  i4312.CharacterCount = i4313[3]
  i4312.LineHeight = i4313[4]
  i4312.Baseline = i4313[5]
  i4312.Ascender = i4313[6]
  i4312.CapHeight = i4313[7]
  i4312.Descender = i4313[8]
  i4312.CenterLine = i4313[9]
  i4312.SuperscriptOffset = i4313[10]
  i4312.SubscriptOffset = i4313[11]
  i4312.SubSize = i4313[12]
  i4312.Underline = i4313[13]
  i4312.UnderlineThickness = i4313[14]
  i4312.strikethrough = i4313[15]
  i4312.strikethroughThickness = i4313[16]
  i4312.TabWidth = i4313[17]
  i4312.Padding = i4313[18]
  i4312.AtlasWidth = i4313[19]
  i4312.AtlasHeight = i4313[20]
  return i4312
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4316 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4317 = data
  i4316.id = i4317[0]
  i4316.x = i4317[1]
  i4316.y = i4317[2]
  i4316.width = i4317[3]
  i4316.height = i4317[4]
  i4316.xOffset = i4317[5]
  i4316.yOffset = i4317[6]
  i4316.xAdvance = i4317[7]
  i4316.scale = i4317[8]
  return i4316
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4318 = root || request.c( 'TMPro.KerningTable' )
  var i4319 = data
  var i4321 = i4319[0]
  var i4320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.add(request.d('TMPro.KerningPair', i4321[i + 0]));
  }
  i4318.kerningPairs = i4320
  return i4318
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4324 = root || request.c( 'TMPro.KerningPair' )
  var i4325 = data
  i4324.xOffset = i4325[0]
  i4324.m_FirstGlyph = i4325[1]
  i4324.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4325[2], i4324.m_FirstGlyphAdjustments)
  i4324.m_SecondGlyph = i4325[3]
  i4324.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4325[4], i4324.m_SecondGlyphAdjustments)
  i4324.m_IgnoreSpacingAdjustments = !!i4325[5]
  return i4324
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4326 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4327 = data
  var i4329 = i4327[0]
  var i4328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4329[i + 0]));
  }
  i4326.m_GlyphPairAdjustmentRecords = i4328
  return i4326
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4332 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4333 = data
  i4332.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4333[0], i4332.m_FirstAdjustmentRecord)
  i4332.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4333[1], i4332.m_SecondAdjustmentRecord)
  i4332.m_FeatureLookupFlags = i4333[2]
  return i4332
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4336 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4337 = data
  i4336.sourceFontFileName = i4337[0]
  i4336.sourceFontFileGUID = i4337[1]
  i4336.pointSizeSamplingMode = i4337[2]
  i4336.pointSize = i4337[3]
  i4336.padding = i4337[4]
  i4336.packingMode = i4337[5]
  i4336.atlasWidth = i4337[6]
  i4336.atlasHeight = i4337[7]
  i4336.characterSetSelectionMode = i4337[8]
  i4336.characterSequence = i4337[9]
  i4336.referencedFontAssetGUID = i4337[10]
  i4336.referencedTextAssetGUID = i4337[11]
  i4336.fontStyle = i4337[12]
  i4336.fontStyleModifier = i4337[13]
  i4336.renderMode = i4337[14]
  i4336.includeFontFeatures = !!i4337[15]
  return i4336
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4340 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4341 = data
  request.r(i4341[0], i4341[1], 0, i4340, 'regularTypeface')
  request.r(i4341[2], i4341[3], 0, i4340, 'italicTypeface')
  return i4340
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4342 = root || request.c( 'TMPro.TMP_Settings' )
  var i4343 = data
  i4342.m_enableWordWrapping = !!i4343[0]
  i4342.m_enableKerning = !!i4343[1]
  i4342.m_enableExtraPadding = !!i4343[2]
  i4342.m_enableTintAllSprites = !!i4343[3]
  i4342.m_enableParseEscapeCharacters = !!i4343[4]
  i4342.m_EnableRaycastTarget = !!i4343[5]
  i4342.m_GetFontFeaturesAtRuntime = !!i4343[6]
  i4342.m_missingGlyphCharacter = i4343[7]
  i4342.m_warningsDisabled = !!i4343[8]
  request.r(i4343[9], i4343[10], 0, i4342, 'm_defaultFontAsset')
  i4342.m_defaultFontAssetPath = i4343[11]
  i4342.m_defaultFontSize = i4343[12]
  i4342.m_defaultAutoSizeMinRatio = i4343[13]
  i4342.m_defaultAutoSizeMaxRatio = i4343[14]
  i4342.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4343[15], i4343[16] )
  i4342.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4343[17], i4343[18] )
  i4342.m_autoSizeTextContainer = !!i4343[19]
  i4342.m_IsTextObjectScaleStatic = !!i4343[20]
  var i4345 = i4343[21]
  var i4344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4345.length; i += 2) {
  request.r(i4345[i + 0], i4345[i + 1], 1, i4344, '')
  }
  i4342.m_fallbackFontAssets = i4344
  i4342.m_matchMaterialPreset = !!i4343[22]
  request.r(i4343[23], i4343[24], 0, i4342, 'm_defaultSpriteAsset')
  i4342.m_defaultSpriteAssetPath = i4343[25]
  i4342.m_enableEmojiSupport = !!i4343[26]
  i4342.m_MissingCharacterSpriteUnicode = i4343[27]
  i4342.m_defaultColorGradientPresetsPath = i4343[28]
  request.r(i4343[29], i4343[30], 0, i4342, 'm_defaultStyleSheet')
  i4342.m_StyleSheetsResourcePath = i4343[31]
  request.r(i4343[32], i4343[33], 0, i4342, 'm_leadingCharacters')
  request.r(i4343[34], i4343[35], 0, i4342, 'm_followingCharacters')
  i4342.m_UseModernHangulLineBreakingRules = !!i4343[36]
  return i4342
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4346 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4347 = data
  i4346.m_GlyphIndex = i4347[0]
  i4346.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4347[1], i4346.m_GlyphValueRecord)
  return i4346
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4348 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4349 = data
  i4348.m_XPlacement = i4349[0]
  i4348.m_YPlacement = i4349[1]
  i4348.m_XAdvance = i4349[2]
  i4348.m_YAdvance = i4349[3]
  return i4348
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4350 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4351 = data
  var i4353 = i4351[0]
  var i4352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.add(request.d('TMPro.TMP_Style', i4353[i + 0]));
  }
  i4350.m_StyleList = i4352
  return i4350
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4356 = root || request.c( 'TMPro.TMP_Style' )
  var i4357 = data
  i4356.m_Name = i4357[0]
  i4356.m_HashCode = i4357[1]
  i4356.m_OpeningDefinition = i4357[2]
  i4356.m_ClosingDefinition = i4357[3]
  i4356.m_OpeningTagArray = i4357[4]
  i4356.m_ClosingTagArray = i4357[5]
  i4356.m_OpeningTagUnicodeArray = i4357[6]
  i4356.m_ClosingTagUnicodeArray = i4357[7]
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4359 = data
  var i4361 = i4359[0]
  var i4360 = []
  for(var i = 0; i < i4361.length; i += 1) {
    i4360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4361[i + 0]) );
  }
  i4358.files = i4360
  i4358.componentToPrefabIds = i4359[1]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4365 = data
  i4364.path = i4365[0]
  request.r(i4365[1], i4365[2], 0, i4364, 'unityObject')
  return i4364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4367 = data
  var i4369 = i4367[0]
  var i4368 = []
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4369[i + 0]) );
  }
  i4366.scriptsExecutionOrder = i4368
  var i4371 = i4367[1]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4371[i + 0]) );
  }
  i4366.sortingLayers = i4370
  var i4373 = i4367[2]
  var i4372 = []
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4373[i + 0]) );
  }
  i4366.cullingLayers = i4372
  i4366.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4367[3], i4366.timeSettings)
  i4366.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4367[4], i4366.physicsSettings)
  i4366.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4367[5], i4366.physics2DSettings)
  i4366.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4367[6], i4366.qualitySettings)
  i4366.enableRealtimeShadows = !!i4367[7]
  i4366.enableAutoInstancing = !!i4367[8]
  i4366.enableDynamicBatching = !!i4367[9]
  i4366.lightmapEncodingQuality = i4367[10]
  i4366.desiredColorSpace = i4367[11]
  var i4375 = i4367[12]
  var i4374 = []
  for(var i = 0; i < i4375.length; i += 1) {
    i4374.push( i4375[i + 0] );
  }
  i4366.allTags = i4374
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4379 = data
  i4378.name = i4379[0]
  i4378.value = i4379[1]
  return i4378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4383 = data
  i4382.id = i4383[0]
  i4382.name = i4383[1]
  i4382.value = i4383[2]
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4387 = data
  i4386.id = i4387[0]
  i4386.name = i4387[1]
  return i4386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4389 = data
  i4388.fixedDeltaTime = i4389[0]
  i4388.maximumDeltaTime = i4389[1]
  i4388.timeScale = i4389[2]
  i4388.maximumParticleTimestep = i4389[3]
  return i4388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4391 = data
  i4390.gravity = new pc.Vec3( i4391[0], i4391[1], i4391[2] )
  i4390.defaultSolverIterations = i4391[3]
  i4390.bounceThreshold = i4391[4]
  i4390.autoSyncTransforms = !!i4391[5]
  i4390.autoSimulation = !!i4391[6]
  var i4393 = i4391[7]
  var i4392 = []
  for(var i = 0; i < i4393.length; i += 1) {
    i4392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4393[i + 0]) );
  }
  i4390.collisionMatrix = i4392
  return i4390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4397 = data
  i4396.enabled = !!i4397[0]
  i4396.layerId = i4397[1]
  i4396.otherLayerId = i4397[2]
  return i4396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4399 = data
  request.r(i4399[0], i4399[1], 0, i4398, 'material')
  i4398.gravity = new pc.Vec2( i4399[2], i4399[3] )
  i4398.positionIterations = i4399[4]
  i4398.velocityIterations = i4399[5]
  i4398.velocityThreshold = i4399[6]
  i4398.maxLinearCorrection = i4399[7]
  i4398.maxAngularCorrection = i4399[8]
  i4398.maxTranslationSpeed = i4399[9]
  i4398.maxRotationSpeed = i4399[10]
  i4398.baumgarteScale = i4399[11]
  i4398.baumgarteTOIScale = i4399[12]
  i4398.timeToSleep = i4399[13]
  i4398.linearSleepTolerance = i4399[14]
  i4398.angularSleepTolerance = i4399[15]
  i4398.defaultContactOffset = i4399[16]
  i4398.autoSimulation = !!i4399[17]
  i4398.queriesHitTriggers = !!i4399[18]
  i4398.queriesStartInColliders = !!i4399[19]
  i4398.callbacksOnDisable = !!i4399[20]
  i4398.reuseCollisionCallbacks = !!i4399[21]
  i4398.autoSyncTransforms = !!i4399[22]
  var i4401 = i4399[23]
  var i4400 = []
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4401[i + 0]) );
  }
  i4398.collisionMatrix = i4400
  return i4398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4405 = data
  i4404.enabled = !!i4405[0]
  i4404.layerId = i4405[1]
  i4404.otherLayerId = i4405[2]
  return i4404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4407 = data
  var i4409 = i4407[0]
  var i4408 = []
  for(var i = 0; i < i4409.length; i += 1) {
    i4408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4409[i + 0]) );
  }
  i4406.qualityLevels = i4408
  var i4411 = i4407[1]
  var i4410 = []
  for(var i = 0; i < i4411.length; i += 1) {
    i4410.push( i4411[i + 0] );
  }
  i4406.names = i4410
  i4406.shadows = i4407[2]
  i4406.anisotropicFiltering = i4407[3]
  i4406.antiAliasing = i4407[4]
  i4406.lodBias = i4407[5]
  i4406.shadowCascades = i4407[6]
  i4406.shadowDistance = i4407[7]
  i4406.shadowmaskMode = i4407[8]
  i4406.shadowProjection = i4407[9]
  i4406.shadowResolution = i4407[10]
  i4406.softParticles = !!i4407[11]
  i4406.softVegetation = !!i4407[12]
  i4406.activeColorSpace = i4407[13]
  i4406.desiredColorSpace = i4407[14]
  i4406.masterTextureLimit = i4407[15]
  i4406.maxQueuedFrames = i4407[16]
  i4406.particleRaycastBudget = i4407[17]
  i4406.pixelLightCount = i4407[18]
  i4406.realtimeReflectionProbes = !!i4407[19]
  i4406.shadowCascade2Split = i4407[20]
  i4406.shadowCascade4Split = new pc.Vec3( i4407[21], i4407[22], i4407[23] )
  i4406.streamingMipmapsActive = !!i4407[24]
  i4406.vSyncCount = i4407[25]
  i4406.asyncUploadBufferSize = i4407[26]
  i4406.asyncUploadTimeSlice = i4407[27]
  i4406.billboardsFaceCameraPosition = !!i4407[28]
  i4406.shadowNearPlaneOffset = i4407[29]
  i4406.streamingMipmapsMemoryBudget = i4407[30]
  i4406.maximumLODLevel = i4407[31]
  i4406.streamingMipmapsAddAllCameras = !!i4407[32]
  i4406.streamingMipmapsMaxLevelReduction = i4407[33]
  i4406.streamingMipmapsRenderersPerFrame = i4407[34]
  i4406.resolutionScalingFixedDPIFactor = i4407[35]
  i4406.streamingMipmapsMaxFileIORequests = i4407[36]
  i4406.currentQualityLevel = i4407[37]
  return i4406
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4414 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4415 = data
  i4414.xPlacement = i4415[0]
  i4414.yPlacement = i4415[1]
  i4414.xAdvance = i4415[2]
  i4414.yAdvance = i4415[3]
  return i4414
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"humanBones":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[18],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[6],"62":[6],"63":[6],"64":[6],"65":[6],"66":[6],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[18],"75":[76],"77":[78],"79":[78],"27":[11],"80":[18],"81":[11],"82":[76,11],"26":[11,12],"83":[11],"84":[12,11],"85":[76],"86":[12,11],"87":[11],"88":[89],"90":[11],"91":[11],"29":[27],"14":[12,11],"92":[11],"28":[27],"93":[11],"94":[11],"95":[11],"96":[11],"97":[11],"98":[11],"30":[11],"99":[11],"100":[11],"101":[12,11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[12,11],"107":[11],"108":[34],"109":[34],"35":[34],"110":[34],"111":[18],"112":[18],"113":[89],"114":[2],"115":[116],"117":[89]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.PolygonCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","PlayableAdKnife","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","CrackedLog","UnityEngine.BoxCollider2D","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","PlayableAdManager","Log","UnityEngine.GameObject","UnityEngine.Animator","KnifeController","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.VerticalLayoutGroup","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Shadow","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CircleCollider2D","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "Knife Hit";

Deserializers.lunaInitializationTime = "11/27/2023 04:37:56";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "5.3.0";

Deserializers.lunaSHA = "1f13c8ab746b672a71592a697e719b6f623ec973";

Deserializers.creativeName = "Knife-Hit";

Deserializers.lunaAppID = "19169";

Deserializers.projectId = "353d04de79307d94ca0c31f115ab9948";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1479";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3752";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.KnifeHit";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "b8d26129-ab22-4955-9fc0-96ba3ef6e8b2";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

