var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.JointSpring' )
  var i1657 = data
  i1656.spring = i1657[0]
  i1656.damper = i1657[1]
  i1656.targetPosition = i1657[2]
  return i1656
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.JointMotor' )
  var i1659 = data
  i1658.m_TargetVelocity = i1659[0]
  i1658.m_Force = i1659[1]
  i1658.m_FreeSpin = i1659[2]
  return i1658
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.JointLimits' )
  var i1661 = data
  i1660.m_Min = i1661[0]
  i1660.m_Max = i1661[1]
  i1660.m_Bounciness = i1661[2]
  i1660.m_BounceMinVelocity = i1661[3]
  i1660.m_ContactDistance = i1661[4]
  i1660.minBounce = i1661[5]
  i1660.maxBounce = i1661[6]
  return i1660
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.JointDrive' )
  var i1663 = data
  i1662.m_PositionSpring = i1663[0]
  i1662.m_PositionDamper = i1663[1]
  i1662.m_MaximumForce = i1663[2]
  return i1662
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1665 = data
  i1664.m_Spring = i1665[0]
  i1664.m_Damper = i1665[1]
  return i1664
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1667 = data
  i1666.m_Limit = i1667[0]
  i1666.m_Bounciness = i1667[1]
  i1666.m_ContactDistance = i1667[2]
  return i1666
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1669 = data
  i1668.m_ExtremumSlip = i1669[0]
  i1668.m_ExtremumValue = i1669[1]
  i1668.m_AsymptoteSlip = i1669[2]
  i1668.m_AsymptoteValue = i1669[3]
  i1668.m_Stiffness = i1669[4]
  return i1668
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1671 = data
  i1670.m_LowerAngle = i1671[0]
  i1670.m_UpperAngle = i1671[1]
  return i1670
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1673 = data
  i1672.m_MotorSpeed = i1673[0]
  i1672.m_MaximumMotorTorque = i1673[1]
  return i1672
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1675 = data
  i1674.m_DampingRatio = i1675[0]
  i1674.m_Frequency = i1675[1]
  i1674.m_Angle = i1675[2]
  return i1674
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1677 = data
  i1676.m_LowerTranslation = i1677[0]
  i1676.m_UpperTranslation = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1678 = root || new pc.UnityMaterial()
  var i1679 = data
  i1678.name = i1679[0]
  request.r(i1679[1], i1679[2], 0, i1678, 'shader')
  i1678.renderQueue = i1679[3]
  i1678.enableInstancing = !!i1679[4]
  var i1681 = i1679[5]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1681[i + 0]) );
  }
  i1678.floatParameters = i1680
  var i1683 = i1679[6]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1683[i + 0]) );
  }
  i1678.colorParameters = i1682
  var i1685 = i1679[7]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1685[i + 0]) );
  }
  i1678.vectorParameters = i1684
  var i1687 = i1679[8]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1687[i + 0]) );
  }
  i1678.textureParameters = i1686
  var i1689 = i1679[9]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1689[i + 0]) );
  }
  i1678.materialFlags = i1688
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1693 = data
  i1692.name = i1693[0]
  i1692.value = i1693[1]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.value = new pc.Color(i1697[1], i1697[2], i1697[3], i1697[4])
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.value = new pc.Vec4( i1701[1], i1701[2], i1701[3], i1701[4] )
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1705 = data
  i1704.name = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'value')
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1709 = data
  i1708.name = i1709[0]
  i1708.enabled = !!i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1711 = data
  i1710.position = new pc.Vec3( i1711[0], i1711[1], i1711[2] )
  i1710.scale = new pc.Vec3( i1711[3], i1711[4], i1711[5] )
  i1710.rotation = new pc.Quat(i1711[6], i1711[7], i1711[8], i1711[9])
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1713 = data
  i1712.enabled = !!i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'sharedMaterial')
  var i1715 = i1713[3]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1712.sharedMaterials = i1714
  i1712.receiveShadows = !!i1713[4]
  i1712.shadowCastingMode = i1713[5]
  i1712.sortingLayerID = i1713[6]
  i1712.sortingOrder = i1713[7]
  i1712.lightmapIndex = i1713[8]
  i1712.lightmapSceneIndex = i1713[9]
  i1712.lightmapScaleOffset = new pc.Vec4( i1713[10], i1713[11], i1713[12], i1713[13] )
  i1712.lightProbeUsage = i1713[14]
  i1712.reflectionProbeUsage = i1713[15]
  i1712.color = new pc.Color(i1713[16], i1713[17], i1713[18], i1713[19])
  request.r(i1713[20], i1713[21], 0, i1712, 'sprite')
  i1712.flipX = !!i1713[22]
  i1712.flipY = !!i1713[23]
  i1712.drawMode = i1713[24]
  i1712.size = new pc.Vec2( i1713[25], i1713[26] )
  i1712.tileMode = i1713[27]
  i1712.adaptiveModeThreshold = i1713[28]
  i1712.maskInteraction = i1713[29]
  i1712.spriteSortPoint = i1713[30]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1719 = data
  i1718.enabled = !!i1719[0]
  i1718.isTrigger = !!i1719[1]
  i1718.usedByEffector = !!i1719[2]
  i1718.density = i1719[3]
  i1718.offset = new pc.Vec2( i1719[4], i1719[5] )
  request.r(i1719[6], i1719[7], 0, i1718, 'material')
  i1718.usedByComposite = !!i1719[8]
  i1718.autoTiling = !!i1719[9]
  var i1721 = i1719[10]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
  var i1723 = i1721[i + 0]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 2) {
    i1722.push( new pc.Vec2( i1723[i + 0], i1723[i + 1] ) );
  }
    i1720.push( i1722 );
  }
  i1718.points = i1720
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1731 = data
  i1730.bodyType = i1731[0]
  request.r(i1731[1], i1731[2], 0, i1730, 'material')
  i1730.simulated = !!i1731[3]
  i1730.useAutoMass = !!i1731[4]
  i1730.mass = i1731[5]
  i1730.drag = i1731[6]
  i1730.angularDrag = i1731[7]
  i1730.gravityScale = i1731[8]
  i1730.collisionDetectionMode = i1731[9]
  i1730.sleepMode = i1731[10]
  i1730.constraints = i1731[11]
  return i1730
}

Deserializers["PlayableAdKnife"] = function (request, data, root) {
  var i1732 = root || request.c( 'PlayableAdKnife' )
  var i1733 = data
  i1732.moveSpeed = i1733[0]
  request.r(i1733[1], i1733[2], 0, i1732, 'knifeController')
  request.r(i1733[3], i1733[4], 0, i1732, 'col')
  request.r(i1733[5], i1733[6], 0, i1732, 'rb')
  request.r(i1733[7], i1733[8], 0, i1732, 'paritcles')
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1735 = data
  i1734.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1735[0], i1734.main)
  i1734.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1735[1], i1734.colorBySpeed)
  i1734.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1735[2], i1734.colorOverLifetime)
  i1734.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1735[3], i1734.emission)
  i1734.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1735[4], i1734.rotationBySpeed)
  i1734.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1735[5], i1734.rotationOverLifetime)
  i1734.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1735[6], i1734.shape)
  i1734.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1735[7], i1734.sizeBySpeed)
  i1734.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1735[8], i1734.sizeOverLifetime)
  i1734.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1735[9], i1734.textureSheetAnimation)
  i1734.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1735[10], i1734.velocityOverLifetime)
  i1734.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1735[11], i1734.noise)
  i1734.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1735[12], i1734.inheritVelocity)
  i1734.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1735[13], i1734.forceOverLifetime)
  i1734.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1735[14], i1734.limitVelocityOverLifetime)
  i1734.useAutoRandomSeed = !!i1735[15]
  i1734.randomSeed = i1735[16]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemMain()
  var i1737 = data
  i1736.duration = i1737[0]
  i1736.loop = !!i1737[1]
  i1736.prewarm = !!i1737[2]
  i1736.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[3], i1736.startDelay)
  i1736.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[4], i1736.startLifetime)
  i1736.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[5], i1736.startSpeed)
  i1736.startSize3D = !!i1737[6]
  i1736.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[7], i1736.startSizeX)
  i1736.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[8], i1736.startSizeY)
  i1736.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[9], i1736.startSizeZ)
  i1736.startRotation3D = !!i1737[10]
  i1736.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[11], i1736.startRotationX)
  i1736.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[12], i1736.startRotationY)
  i1736.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[13], i1736.startRotationZ)
  i1736.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1737[14], i1736.startColor)
  i1736.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[15], i1736.gravityModifier)
  i1736.simulationSpace = i1737[16]
  request.r(i1737[17], i1737[18], 0, i1736, 'customSimulationSpace')
  i1736.simulationSpeed = i1737[19]
  i1736.useUnscaledTime = !!i1737[20]
  i1736.scalingMode = i1737[21]
  i1736.playOnAwake = !!i1737[22]
  i1736.maxParticles = i1737[23]
  i1736.emitterVelocityMode = i1737[24]
  i1736.stopAction = i1737[25]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1738 = root || new pc.MinMaxCurve()
  var i1739 = data
  i1738.mode = i1739[0]
  i1738.curveMin = new pc.AnimationCurve( { keys_flow: i1739[1] } )
  i1738.curveMax = new pc.AnimationCurve( { keys_flow: i1739[2] } )
  i1738.curveMultiplier = i1739[3]
  i1738.constantMin = i1739[4]
  i1738.constantMax = i1739[5]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1740 = root || new pc.MinMaxGradient()
  var i1741 = data
  i1740.mode = i1741[0]
  i1740.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1741[1], i1740.gradientMin)
  i1740.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1741[2], i1740.gradientMax)
  i1740.colorMin = new pc.Color(i1741[3], i1741[4], i1741[5], i1741[6])
  i1740.colorMax = new pc.Color(i1741[7], i1741[8], i1741[9], i1741[10])
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1743 = data
  i1742.mode = i1743[0]
  var i1745 = i1743[1]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1745[i + 0]) );
  }
  i1742.colorKeys = i1744
  var i1747 = i1743[2]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1747[i + 0]) );
  }
  i1742.alphaKeys = i1746
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1748 = root || new pc.ParticleSystemColorBySpeed()
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1749[1], i1748.color)
  i1748.range = new pc.Vec2( i1749[2], i1749[3] )
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1753 = data
  i1752.color = new pc.Color(i1753[0], i1753[1], i1753[2], i1753[3])
  i1752.time = i1753[4]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1757 = data
  i1756.alpha = i1757[0]
  i1756.time = i1757[1]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemColorOverLifetime()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1759[1], i1758.color)
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemEmitter()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[1], i1760.rateOverTime)
  i1760.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.rateOverDistance)
  var i1763 = i1761[3]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1763[i + 0]) );
  }
  i1760.bursts = i1762
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1766 = root || new pc.ParticleSystemBurst()
  var i1767 = data
  i1766.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[0], i1766.count)
  i1766.cycleCount = i1767[1]
  i1766.minCount = i1767[2]
  i1766.maxCount = i1767[3]
  i1766.repeatInterval = i1767[4]
  i1766.time = i1767[5]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemRotationBySpeed()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[1], i1768.x)
  i1768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[2], i1768.y)
  i1768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[3], i1768.z)
  i1768.separateAxes = !!i1769[4]
  i1768.range = new pc.Vec2( i1769[5], i1769[6] )
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[1], i1770.x)
  i1770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[2], i1770.y)
  i1770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[3], i1770.z)
  i1770.separateAxes = !!i1771[4]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1772 = root || new pc.ParticleSystemShape()
  var i1773 = data
  i1772.enabled = !!i1773[0]
  i1772.shapeType = i1773[1]
  i1772.randomDirectionAmount = i1773[2]
  i1772.sphericalDirectionAmount = i1773[3]
  i1772.randomPositionAmount = i1773[4]
  i1772.alignToDirection = !!i1773[5]
  i1772.radius = i1773[6]
  i1772.radiusMode = i1773[7]
  i1772.radiusSpread = i1773[8]
  i1772.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[9], i1772.radiusSpeed)
  i1772.radiusThickness = i1773[10]
  i1772.angle = i1773[11]
  i1772.length = i1773[12]
  i1772.boxThickness = new pc.Vec3( i1773[13], i1773[14], i1773[15] )
  i1772.meshShapeType = i1773[16]
  request.r(i1773[17], i1773[18], 0, i1772, 'mesh')
  request.r(i1773[19], i1773[20], 0, i1772, 'meshRenderer')
  request.r(i1773[21], i1773[22], 0, i1772, 'skinnedMeshRenderer')
  i1772.useMeshMaterialIndex = !!i1773[23]
  i1772.meshMaterialIndex = i1773[24]
  i1772.useMeshColors = !!i1773[25]
  i1772.normalOffset = i1773[26]
  i1772.arc = i1773[27]
  i1772.arcMode = i1773[28]
  i1772.arcSpread = i1773[29]
  i1772.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[30], i1772.arcSpeed)
  i1772.donutRadius = i1773[31]
  i1772.position = new pc.Vec3( i1773[32], i1773[33], i1773[34] )
  i1772.rotation = new pc.Vec3( i1773[35], i1773[36], i1773[37] )
  i1772.scale = new pc.Vec3( i1773[38], i1773[39], i1773[40] )
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemSizeBySpeed()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[1], i1774.x)
  i1774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[2], i1774.y)
  i1774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[3], i1774.z)
  i1774.separateAxes = !!i1775[4]
  i1774.range = new pc.Vec2( i1775[5], i1775[6] )
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[1], i1776.x)
  i1776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[2], i1776.y)
  i1776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[3], i1776.z)
  i1776.separateAxes = !!i1777[4]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1778 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.mode = i1779[1]
  i1778.animation = i1779[2]
  i1778.numTilesX = i1779[3]
  i1778.numTilesY = i1779[4]
  i1778.useRandomRow = !!i1779[5]
  i1778.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[6], i1778.frameOverTime)
  i1778.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[7], i1778.startFrame)
  i1778.cycleCount = i1779[8]
  i1778.rowIndex = i1779[9]
  i1778.flipU = i1779[10]
  i1778.flipV = i1779[11]
  i1778.spriteCount = i1779[12]
  var i1781 = i1779[13]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 2, i1780, '')
  }
  i1778.sprites = i1780
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.x)
  i1784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.y)
  i1784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.z)
  i1784.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[4], i1784.radial)
  i1784.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[5], i1784.speedModifier)
  i1784.space = i1785[6]
  i1784.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[7], i1784.orbitalX)
  i1784.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[8], i1784.orbitalY)
  i1784.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[9], i1784.orbitalZ)
  i1784.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[10], i1784.orbitalOffsetX)
  i1784.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[11], i1784.orbitalOffsetY)
  i1784.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[12], i1784.orbitalOffsetZ)
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemNoise()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.separateAxes = !!i1787[1]
  i1786.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[2], i1786.strengthX)
  i1786.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[3], i1786.strengthY)
  i1786.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[4], i1786.strengthZ)
  i1786.frequency = i1787[5]
  i1786.damping = !!i1787[6]
  i1786.octaveCount = i1787[7]
  i1786.octaveMultiplier = i1787[8]
  i1786.octaveScale = i1787[9]
  i1786.quality = i1787[10]
  i1786.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[11], i1786.scrollSpeed)
  i1786.scrollSpeedMultiplier = i1787[12]
  i1786.remapEnabled = !!i1787[13]
  i1786.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[14], i1786.remapX)
  i1786.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[15], i1786.remapY)
  i1786.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[16], i1786.remapZ)
  i1786.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[17], i1786.positionAmount)
  i1786.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[18], i1786.rotationAmount)
  i1786.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[19], i1786.sizeAmount)
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemInheritVelocity()
  var i1789 = data
  i1788.enabled = !!i1789[0]
  i1788.mode = i1789[1]
  i1788.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[2], i1788.curve)
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemForceOverLifetime()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[1], i1790.x)
  i1790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[2], i1790.y)
  i1790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[3], i1790.z)
  i1790.space = i1791[4]
  i1790.randomized = !!i1791[5]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[1], i1792.limit)
  i1792.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[2], i1792.limitX)
  i1792.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[3], i1792.limitY)
  i1792.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[4], i1792.limitZ)
  i1792.dampen = i1793[5]
  i1792.separateAxes = !!i1793[6]
  i1792.space = i1793[7]
  i1792.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[8], i1792.drag)
  i1792.multiplyDragByParticleSize = !!i1793[9]
  i1792.multiplyDragByParticleVelocity = !!i1793[10]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1795 = data
  i1794.enabled = !!i1795[0]
  request.r(i1795[1], i1795[2], 0, i1794, 'sharedMaterial')
  var i1797 = i1795[3]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.sharedMaterials = i1796
  i1794.receiveShadows = !!i1795[4]
  i1794.shadowCastingMode = i1795[5]
  i1794.sortingLayerID = i1795[6]
  i1794.sortingOrder = i1795[7]
  i1794.lightmapIndex = i1795[8]
  i1794.lightmapSceneIndex = i1795[9]
  i1794.lightmapScaleOffset = new pc.Vec4( i1795[10], i1795[11], i1795[12], i1795[13] )
  i1794.lightProbeUsage = i1795[14]
  i1794.reflectionProbeUsage = i1795[15]
  request.r(i1795[16], i1795[17], 0, i1794, 'mesh')
  i1794.meshCount = i1795[18]
  i1794.activeVertexStreamsCount = i1795[19]
  i1794.alignment = i1795[20]
  i1794.renderMode = i1795[21]
  i1794.sortMode = i1795[22]
  i1794.lengthScale = i1795[23]
  i1794.velocityScale = i1795[24]
  i1794.cameraVelocityScale = i1795[25]
  i1794.normalDirection = i1795[26]
  i1794.sortingFudge = i1795[27]
  i1794.minParticleSize = i1795[28]
  i1794.maxParticleSize = i1795[29]
  i1794.pivot = new pc.Vec3( i1795[30], i1795[31], i1795[32] )
  request.r(i1795[33], i1795[34], 0, i1794, 'trailMaterial')
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1799 = data
  i1798.name = i1799[0]
  i1798.tagId = i1799[1]
  i1798.enabled = !!i1799[2]
  i1798.isStatic = !!i1799[3]
  i1798.layer = i1799[4]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.width = i1801[1]
  i1800.height = i1801[2]
  i1800.mipmapCount = i1801[3]
  i1800.anisoLevel = i1801[4]
  i1800.filterMode = i1801[5]
  i1800.hdr = !!i1801[6]
  i1800.format = i1801[7]
  i1800.wrapMode = i1801[8]
  i1800.alphaIsTransparency = !!i1801[9]
  i1800.alphaSource = i1801[10]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1803 = data
  i1802.pivot = new pc.Vec2( i1803[0], i1803[1] )
  i1802.anchorMin = new pc.Vec2( i1803[2], i1803[3] )
  i1802.anchorMax = new pc.Vec2( i1803[4], i1803[5] )
  i1802.sizeDelta = new pc.Vec2( i1803[6], i1803[7] )
  i1802.anchoredPosition3D = new pc.Vec3( i1803[8], i1803[9], i1803[10] )
  i1802.rotation = new pc.Quat(i1803[11], i1803[12], i1803[13], i1803[14])
  i1802.scale = new pc.Vec3( i1803[15], i1803[16], i1803[17] )
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1805 = data
  i1804.cullTransparentMesh = !!i1805[0]
  return i1804
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.UI.Image' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'm_Sprite')
  i1806.m_Type = i1807[2]
  i1806.m_PreserveAspect = !!i1807[3]
  i1806.m_FillCenter = !!i1807[4]
  i1806.m_FillMethod = i1807[5]
  i1806.m_FillAmount = i1807[6]
  i1806.m_FillClockwise = !!i1807[7]
  i1806.m_FillOrigin = i1807[8]
  i1806.m_UseSpriteMesh = !!i1807[9]
  i1806.m_PixelsPerUnitMultiplier = i1807[10]
  request.r(i1807[11], i1807[12], 0, i1806, 'm_Material')
  i1806.m_Maskable = !!i1807[13]
  i1806.m_Color = new pc.Color(i1807[14], i1807[15], i1807[16], i1807[17])
  i1806.m_RaycastTarget = !!i1807[18]
  i1806.m_RaycastPadding = new pc.Vec4( i1807[19], i1807[20], i1807[21], i1807[22] )
  return i1806
}

Deserializers["CrackedLog"] = function (request, data, root) {
  var i1808 = root || request.c( 'CrackedLog' )
  var i1809 = data
  i1808.min_force = i1809[0]
  i1808.max_force = i1809[1]
  i1808.min_torque = i1809[2]
  i1808.max_torque = i1809[3]
  var i1811 = i1809[4]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('CrackedLogForce', i1811[i + 0]) );
  }
  i1808.pieces = i1810
  var i1813 = i1809[5]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('CrackedLogForce', i1813[i + 0]) );
  }
  i1808.knives = i1812
  return i1808
}

Deserializers["CrackedLogForce"] = function (request, data, root) {
  var i1816 = root || request.c( 'CrackedLogForce' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'rb')
  i1816.min_X = i1817[2]
  i1816.max_X = i1817[3]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1819 = data
  i1818.usedByComposite = !!i1819[0]
  i1818.autoTiling = !!i1819[1]
  i1818.size = new pc.Vec2( i1819[2], i1819[3] )
  i1818.edgeRadius = i1819[4]
  i1818.enabled = !!i1819[5]
  i1818.isTrigger = !!i1819[6]
  i1818.usedByEffector = !!i1819[7]
  i1818.density = i1819[8]
  i1818.offset = new pc.Vec2( i1819[9], i1819[10] )
  request.r(i1819[11], i1819[12], 0, i1818, 'material')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.atlasId = i1821[1]
  i1820.mipmapCount = i1821[2]
  i1820.hdr = !!i1821[3]
  i1820.size = i1821[4]
  i1820.anisoLevel = i1821[5]
  i1820.filterMode = i1821[6]
  i1820.wrapMode = i1821[7]
  var i1823 = i1821[8]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 4) {
    i1822.push( UnityEngine.Rect.MinMaxRect(i1823[i + 0], i1823[i + 1], i1823[i + 2], i1823[i + 3]) );
  }
  i1820.rects = i1822
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.index = i1827[1]
  i1826.startup = !!i1827[2]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1829 = data
  i1828.enabled = !!i1829[0]
  i1828.aspect = i1829[1]
  i1828.orthographic = !!i1829[2]
  i1828.orthographicSize = i1829[3]
  i1828.backgroundColor = new pc.Color(i1829[4], i1829[5], i1829[6], i1829[7])
  i1828.nearClipPlane = i1829[8]
  i1828.farClipPlane = i1829[9]
  i1828.fieldOfView = i1829[10]
  i1828.depth = i1829[11]
  i1828.clearFlags = i1829[12]
  i1828.cullingMask = i1829[13]
  i1828.rect = i1829[14]
  request.r(i1829[15], i1829[16], 0, i1828, 'targetTexture')
  i1828.usePhysicalProperties = !!i1829[17]
  i1828.focalLength = i1829[18]
  i1828.sensorSize = new pc.Vec2( i1829[19], i1829[20] )
  i1828.lensShift = new pc.Vec2( i1829[21], i1829[22] )
  i1828.gateFit = i1829[23]
  return i1828
}

Deserializers["PlayableAdManager"] = function (request, data, root) {
  var i1830 = root || request.c( 'PlayableAdManager' )
  var i1831 = data
  request.r(i1831[0], i1831[1], 0, i1830, 'log')
  request.r(i1831[2], i1831[3], 0, i1830, 'backgroundImg')
  request.r(i1831[4], i1831[5], 0, i1830, 'backgroundSprite')
  request.r(i1831[6], i1831[7], 0, i1830, 'gameIconImg')
  request.r(i1831[8], i1831[9], 0, i1830, 'gameIconSprite')
  request.r(i1831[10], i1831[11], 0, i1830, 'clickUI')
  request.r(i1831[12], i1831[13], 0, i1830, 'gameEndPanelAimController')
  request.r(i1831[14], i1831[15], 0, i1830, 'installBtnAnimController')
  request.r(i1831[16], i1831[17], 0, i1830, 'knifeController')
  i1830.gameEndPanelColor = new pc.Color(i1831[18], i1831[19], i1831[20], i1831[21])
  i1830.gameNameText = i1831[22]
  i1830.gameNameTextColor = new pc.Color(i1831[23], i1831[24], i1831[25], i1831[26])
  i1830.installBtnColor = new pc.Color(i1831[27], i1831[28], i1831[29], i1831[30])
  i1830.installBtnText = i1831[31]
  i1830.installBtnTextColor = new pc.Color(i1831[32], i1831[33], i1831[34], i1831[35])
  i1830.url = i1831[36]
  request.r(i1831[37], i1831[38], 0, i1830, 'gameEndPanelImg')
  request.r(i1831[39], i1831[40], 0, i1830, 'installBtn')
  request.r(i1831[41], i1831[42], 0, i1830, 'installBtnTMP')
  request.r(i1831[43], i1831[44], 0, i1830, 'gameNameTMP')
  request.r(i1831[45], i1831[46], 0, i1830, 'gamePlayPanel')
  request.r(i1831[47], i1831[48], 0, i1830, 'gameEndPanel')
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.planeDistance = i1833[1]
  i1832.referencePixelsPerUnit = i1833[2]
  i1832.isFallbackOverlay = !!i1833[3]
  i1832.renderMode = i1833[4]
  i1832.renderOrder = i1833[5]
  i1832.sortingLayerName = i1833[6]
  i1832.sortingOrder = i1833[7]
  i1832.scaleFactor = i1833[8]
  request.r(i1833[9], i1833[10], 0, i1832, 'worldCamera')
  i1832.overrideSorting = !!i1833[11]
  i1832.pixelPerfect = !!i1833[12]
  i1832.targetDisplay = i1833[13]
  i1832.overridePixelPerfect = !!i1833[14]
  return i1832
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1835 = data
  i1834.m_UiScaleMode = i1835[0]
  i1834.m_ReferencePixelsPerUnit = i1835[1]
  i1834.m_ScaleFactor = i1835[2]
  i1834.m_ReferenceResolution = new pc.Vec2( i1835[3], i1835[4] )
  i1834.m_ScreenMatchMode = i1835[5]
  i1834.m_MatchWidthOrHeight = i1835[6]
  i1834.m_PhysicalUnit = i1835[7]
  i1834.m_FallbackScreenDPI = i1835[8]
  i1834.m_DefaultSpriteDPI = i1835[9]
  i1834.m_DynamicPixelsPerUnit = i1835[10]
  i1834.m_PresetInfoIsWorld = !!i1835[11]
  return i1834
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1837 = data
  i1836.m_IgnoreReversedGraphics = !!i1837[0]
  i1836.m_BlockingObjects = i1837[1]
  i1836.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1837[2] )
  return i1836
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1839 = data
  i1838.m_Spacing = i1839[0]
  i1838.m_ChildForceExpandWidth = !!i1839[1]
  i1838.m_ChildForceExpandHeight = !!i1839[2]
  i1838.m_ChildControlWidth = !!i1839[3]
  i1838.m_ChildControlHeight = !!i1839[4]
  i1838.m_ChildScaleWidth = !!i1839[5]
  i1838.m_ChildScaleHeight = !!i1839[6]
  i1838.m_ReverseArrangement = !!i1839[7]
  i1838.m_Padding = UnityEngine.RectOffset.FromPaddings(i1839[8], i1839[9], i1839[10], i1839[11])
  i1838.m_ChildAlignment = i1839[12]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'animatorController')
  request.r(i1841[2], i1841[3], 0, i1840, 'avatar')
  i1840.updateMode = i1841[4]
  i1840.hasTransformHierarchy = !!i1841[5]
  var i1843 = i1841[6]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 2) {
  request.r(i1843[i + 0], i1843[i + 1], 2, i1842, '')
  }
  i1840.humanBones = i1842
  i1840.enabled = !!i1841[7]
  return i1840
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1847 = data
  i1846.m_EffectColor = new pc.Color(i1847[0], i1847[1], i1847[2], i1847[3])
  i1846.m_EffectDistance = new pc.Vec2( i1847[4], i1847[5] )
  i1846.m_UseGraphicAlpha = !!i1847[6]
  return i1846
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1848 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1849 = data
  i1848.m_hasFontAssetChanged = !!i1849[0]
  request.r(i1849[1], i1849[2], 0, i1848, 'm_baseMaterial')
  i1848.m_maskOffset = new pc.Vec4( i1849[3], i1849[4], i1849[5], i1849[6] )
  i1848.m_text = i1849[7]
  i1848.m_isRightToLeft = !!i1849[8]
  request.r(i1849[9], i1849[10], 0, i1848, 'm_fontAsset')
  request.r(i1849[11], i1849[12], 0, i1848, 'm_sharedMaterial')
  var i1851 = i1849[13]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1848.m_fontSharedMaterials = i1850
  request.r(i1849[14], i1849[15], 0, i1848, 'm_fontMaterial')
  var i1853 = i1849[16]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 2) {
  request.r(i1853[i + 0], i1853[i + 1], 2, i1852, '')
  }
  i1848.m_fontMaterials = i1852
  i1848.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1849[17], i1849[18], i1849[19], i1849[20])
  i1848.m_fontColor = new pc.Color(i1849[21], i1849[22], i1849[23], i1849[24])
  i1848.m_enableVertexGradient = !!i1849[25]
  i1848.m_colorMode = i1849[26]
  i1848.m_fontColorGradient = request.d('TMPro.VertexGradient', i1849[27], i1848.m_fontColorGradient)
  request.r(i1849[28], i1849[29], 0, i1848, 'm_fontColorGradientPreset')
  request.r(i1849[30], i1849[31], 0, i1848, 'm_spriteAsset')
  i1848.m_tintAllSprites = !!i1849[32]
  request.r(i1849[33], i1849[34], 0, i1848, 'm_StyleSheet')
  i1848.m_TextStyleHashCode = i1849[35]
  i1848.m_overrideHtmlColors = !!i1849[36]
  i1848.m_faceColor = UnityEngine.Color32.ConstructColor(i1849[37], i1849[38], i1849[39], i1849[40])
  i1848.m_fontSize = i1849[41]
  i1848.m_fontSizeBase = i1849[42]
  i1848.m_fontWeight = i1849[43]
  i1848.m_enableAutoSizing = !!i1849[44]
  i1848.m_fontSizeMin = i1849[45]
  i1848.m_fontSizeMax = i1849[46]
  i1848.m_fontStyle = i1849[47]
  i1848.m_HorizontalAlignment = i1849[48]
  i1848.m_VerticalAlignment = i1849[49]
  i1848.m_textAlignment = i1849[50]
  i1848.m_characterSpacing = i1849[51]
  i1848.m_wordSpacing = i1849[52]
  i1848.m_lineSpacing = i1849[53]
  i1848.m_lineSpacingMax = i1849[54]
  i1848.m_paragraphSpacing = i1849[55]
  i1848.m_charWidthMaxAdj = i1849[56]
  i1848.m_enableWordWrapping = !!i1849[57]
  i1848.m_wordWrappingRatios = i1849[58]
  i1848.m_overflowMode = i1849[59]
  request.r(i1849[60], i1849[61], 0, i1848, 'm_linkedTextComponent')
  request.r(i1849[62], i1849[63], 0, i1848, 'parentLinkedComponent')
  i1848.m_enableKerning = !!i1849[64]
  i1848.m_enableExtraPadding = !!i1849[65]
  i1848.checkPaddingRequired = !!i1849[66]
  i1848.m_isRichText = !!i1849[67]
  i1848.m_parseCtrlCharacters = !!i1849[68]
  i1848.m_isOrthographic = !!i1849[69]
  i1848.m_isCullingEnabled = !!i1849[70]
  i1848.m_horizontalMapping = i1849[71]
  i1848.m_verticalMapping = i1849[72]
  i1848.m_uvLineOffset = i1849[73]
  i1848.m_geometrySortingOrder = i1849[74]
  i1848.m_IsTextObjectScaleStatic = !!i1849[75]
  i1848.m_VertexBufferAutoSizeReduction = !!i1849[76]
  i1848.m_useMaxVisibleDescender = !!i1849[77]
  i1848.m_pageToDisplay = i1849[78]
  i1848.m_margin = new pc.Vec4( i1849[79], i1849[80], i1849[81], i1849[82] )
  i1848.m_isUsingLegacyAnimationComponent = !!i1849[83]
  i1848.m_isVolumetricText = !!i1849[84]
  request.r(i1849[85], i1849[86], 0, i1848, 'm_Material')
  i1848.m_Maskable = !!i1849[87]
  i1848.m_Color = new pc.Color(i1849[88], i1849[89], i1849[90], i1849[91])
  i1848.m_RaycastTarget = !!i1849[92]
  i1848.m_RaycastPadding = new pc.Vec4( i1849[93], i1849[94], i1849[95], i1849[96] )
  return i1848
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.VertexGradient' )
  var i1855 = data
  i1854.topLeft = new pc.Color(i1855[0], i1855[1], i1855[2], i1855[3])
  i1854.topRight = new pc.Color(i1855[4], i1855[5], i1855[6], i1855[7])
  i1854.bottomLeft = new pc.Color(i1855[8], i1855[9], i1855[10], i1855[11])
  i1854.bottomRight = new pc.Color(i1855[12], i1855[13], i1855[14], i1855[15])
  return i1854
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.Button' )
  var i1857 = data
  i1856.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1857[0], i1856.m_OnClick)
  i1856.m_Navigation = request.d('UnityEngine.UI.Navigation', i1857[1], i1856.m_Navigation)
  i1856.m_Transition = i1857[2]
  i1856.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1857[3], i1856.m_Colors)
  i1856.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1857[4], i1856.m_SpriteState)
  i1856.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1857[5], i1856.m_AnimationTriggers)
  i1856.m_Interactable = !!i1857[6]
  request.r(i1857[7], i1857[8], 0, i1856, 'm_TargetGraphic')
  return i1856
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1859 = data
  i1858.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1859[0], i1858.m_PersistentCalls)
  return i1858
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1861 = data
  var i1863 = i1861[0]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.add(request.d('UnityEngine.Events.PersistentCall', i1863[i + 0]));
  }
  i1860.m_Calls = i1862
  return i1860
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'm_Target')
  i1866.m_TargetAssemblyTypeName = i1867[2]
  i1866.m_MethodName = i1867[3]
  i1866.m_Mode = i1867[4]
  i1866.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1867[5], i1866.m_Arguments)
  i1866.m_CallState = i1867[6]
  return i1866
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_ObjectArgument')
  i1868.m_ObjectArgumentAssemblyTypeName = i1869[2]
  i1868.m_IntArgument = i1869[3]
  i1868.m_FloatArgument = i1869[4]
  i1868.m_StringArgument = i1869[5]
  i1868.m_BoolArgument = !!i1869[6]
  return i1868
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1871 = data
  i1870.m_Mode = i1871[0]
  i1870.m_WrapAround = !!i1871[1]
  request.r(i1871[2], i1871[3], 0, i1870, 'm_SelectOnUp')
  request.r(i1871[4], i1871[5], 0, i1870, 'm_SelectOnDown')
  request.r(i1871[6], i1871[7], 0, i1870, 'm_SelectOnLeft')
  request.r(i1871[8], i1871[9], 0, i1870, 'm_SelectOnRight')
  return i1870
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1873 = data
  i1872.m_NormalColor = new pc.Color(i1873[0], i1873[1], i1873[2], i1873[3])
  i1872.m_HighlightedColor = new pc.Color(i1873[4], i1873[5], i1873[6], i1873[7])
  i1872.m_PressedColor = new pc.Color(i1873[8], i1873[9], i1873[10], i1873[11])
  i1872.m_SelectedColor = new pc.Color(i1873[12], i1873[13], i1873[14], i1873[15])
  i1872.m_DisabledColor = new pc.Color(i1873[16], i1873[17], i1873[18], i1873[19])
  i1872.m_ColorMultiplier = i1873[20]
  i1872.m_FadeDuration = i1873[21]
  return i1872
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_HighlightedSprite')
  request.r(i1875[2], i1875[3], 0, i1874, 'm_PressedSprite')
  request.r(i1875[4], i1875[5], 0, i1874, 'm_SelectedSprite')
  request.r(i1875[6], i1875[7], 0, i1874, 'm_DisabledSprite')
  return i1874
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1877 = data
  i1876.m_NormalTrigger = i1877[0]
  i1876.m_HighlightedTrigger = i1877[1]
  i1876.m_PressedTrigger = i1877[2]
  i1876.m_SelectedTrigger = i1877[3]
  i1876.m_DisabledTrigger = i1877[4]
  return i1876
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'm_FirstSelected')
  i1878.m_sendNavigationEvents = !!i1879[2]
  i1878.m_DragThreshold = i1879[3]
  return i1878
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1881 = data
  i1880.m_HorizontalAxis = i1881[0]
  i1880.m_VerticalAxis = i1881[1]
  i1880.m_SubmitButton = i1881[2]
  i1880.m_CancelButton = i1881[3]
  i1880.m_InputActionsPerSecond = i1881[4]
  i1880.m_RepeatDelay = i1881[5]
  i1880.m_ForceModuleActive = !!i1881[6]
  i1880.m_SendPointerHoverToParent = !!i1881[7]
  return i1880
}

Deserializers["KnifeController"] = function (request, data, root) {
  var i1882 = root || request.c( 'KnifeController' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'knifePrefab')
  var i1885 = i1883[2]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.knivesPool = i1884
  request.r(i1883[3], i1883[4], 0, i1882, 'knivesPoolPos')
  request.r(i1883[5], i1883[6], 0, i1882, 'availableKnivesList')
  request.r(i1883[7], i1883[8], 0, i1882, 'availableKnifeUIPrefab')
  var i1887 = i1883[9]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1882.availableKnivesUI = i1886
  i1882.usedKnifeColor = new pc.Color(i1883[10], i1883[11], i1883[12], i1883[13])
  i1882.currKnifeIndex = i1883[14]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1891 = data
  i1890.radius = i1891[0]
  i1890.enabled = !!i1891[1]
  i1890.isTrigger = !!i1891[2]
  i1890.usedByEffector = !!i1891[3]
  i1890.density = i1891[4]
  i1890.offset = new pc.Vec2( i1891[5], i1891[6] )
  request.r(i1891[7], i1891[8], 0, i1890, 'material')
  return i1890
}

Deserializers["Log"] = function (request, data, root) {
  var i1892 = root || request.c( 'Log' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'spriteRenderer')
  request.r(i1893[2], i1893[3], 0, i1892, 'animController')
  request.r(i1893[4], i1893[5], 0, i1892, 'selectedKnifeSprite')
  request.r(i1893[6], i1893[7], 0, i1892, 'crackedLog')
  i1892.minRotateTimer = i1893[8]
  i1892.maxRotateTimer = i1893[9]
  i1892.minRotateSpeed = i1893[10]
  i1892.maxRotateSpeed = i1893[11]
  i1892.stationaryPos = new pc.Vec3( i1893[12], i1893[13], i1893[14] )
  i1892.hitPos = new pc.Vec3( i1893[15], i1893[16], i1893[17] )
  i1892.stationaryColor = new pc.Color(i1893[18], i1893[19], i1893[20], i1893[21])
  i1892.hitColor = new pc.Color(i1893[22], i1893[23], i1893[24], i1893[25])
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1895 = data
  i1894.ambientIntensity = i1895[0]
  i1894.reflectionIntensity = i1895[1]
  i1894.ambientMode = i1895[2]
  i1894.ambientLight = new pc.Color(i1895[3], i1895[4], i1895[5], i1895[6])
  i1894.ambientSkyColor = new pc.Color(i1895[7], i1895[8], i1895[9], i1895[10])
  i1894.ambientGroundColor = new pc.Color(i1895[11], i1895[12], i1895[13], i1895[14])
  i1894.ambientEquatorColor = new pc.Color(i1895[15], i1895[16], i1895[17], i1895[18])
  i1894.fogColor = new pc.Color(i1895[19], i1895[20], i1895[21], i1895[22])
  i1894.fogEndDistance = i1895[23]
  i1894.fogStartDistance = i1895[24]
  i1894.fogDensity = i1895[25]
  i1894.fog = !!i1895[26]
  request.r(i1895[27], i1895[28], 0, i1894, 'skybox')
  i1894.fogMode = i1895[29]
  var i1897 = i1895[30]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1897[i + 0]) );
  }
  i1894.lightmaps = i1896
  i1894.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1895[31], i1894.lightProbes)
  i1894.lightmapsMode = i1895[32]
  i1894.mixedBakeMode = i1895[33]
  i1894.environmentLightingMode = i1895[34]
  i1894.ambientProbe = new pc.SphericalHarmonicsL2(i1895[35])
  i1894.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1895[36])
  i1894.useReferenceAmbientProbe = !!i1895[37]
  request.r(i1895[38], i1895[39], 0, i1894, 'customReflection')
  request.r(i1895[40], i1895[41], 0, i1894, 'defaultReflection')
  i1894.defaultReflectionMode = i1895[42]
  i1894.defaultReflectionResolution = i1895[43]
  i1894.sunLightObjectId = i1895[44]
  i1894.pixelLightCount = i1895[45]
  i1894.defaultReflectionHDR = !!i1895[46]
  i1894.hasLightDataAsset = !!i1895[47]
  i1894.hasManualGenerate = !!i1895[48]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'lightmapColor')
  request.r(i1901[2], i1901[3], 0, i1900, 'lightmapDirection')
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1902 = root || new UnityEngine.LightProbes()
  var i1903 = data
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1913[i + 0]));
  }
  i1910.ShaderCompilationErrors = i1912
  i1910.name = i1911[1]
  i1910.guid = i1911[2]
  var i1915 = i1911[3]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1910.shaderDefinedKeywords = i1914
  var i1917 = i1911[4]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1917[i + 0]) );
  }
  i1910.passes = i1916
  var i1919 = i1911[5]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1919[i + 0]) );
  }
  i1910.usePasses = i1918
  var i1921 = i1911[6]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1921[i + 0]) );
  }
  i1910.defaultParameterValues = i1920
  request.r(i1911[7], i1911[8], 0, i1910, 'unityFallbackShader')
  i1910.readDepth = !!i1911[9]
  i1910.isCreatedByShaderGraph = !!i1911[10]
  i1910.usedBatchUniforms = i1911[11]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1925 = data
  i1924.shaderName = i1925[0]
  i1924.errorMessage = i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1930 = root || new pc.UnityShaderPass()
  var i1931 = data
  i1930.id = i1931[0]
  i1930.subShaderIndex = i1931[1]
  i1930.name = i1931[2]
  i1930.passType = i1931[3]
  i1930.grabPassTextureName = i1931[4]
  i1930.usePass = !!i1931[5]
  i1930.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[6], i1930.zTest)
  i1930.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[7], i1930.zWrite)
  i1930.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[8], i1930.culling)
  i1930.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1931[9], i1930.blending)
  i1930.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1931[10], i1930.alphaBlending)
  i1930.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[11], i1930.colorWriteMask)
  i1930.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[12], i1930.offsetUnits)
  i1930.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[13], i1930.offsetFactor)
  i1930.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[14], i1930.stencilRef)
  i1930.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[15], i1930.stencilReadMask)
  i1930.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[16], i1930.stencilWriteMask)
  i1930.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[17], i1930.stencilOp)
  i1930.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[18], i1930.stencilOpFront)
  i1930.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[19], i1930.stencilOpBack)
  var i1933 = i1931[20]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1933[i + 0]) );
  }
  i1930.tags = i1932
  var i1935 = i1931[21]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( i1935[i + 0] );
  }
  i1930.passDefinedKeywords = i1934
  var i1937 = i1931[22]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1937[i + 0]) );
  }
  i1930.passDefinedKeywordGroups = i1936
  var i1939 = i1931[23]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1939[i + 0]) );
  }
  i1930.variants = i1938
  var i1941 = i1931[24]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1941[i + 0]) );
  }
  i1930.excludedVariants = i1940
  i1930.hasDepthReader = !!i1931[25]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1943 = data
  i1942.val = i1943[0]
  i1942.name = i1943[1]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1945 = data
  i1944.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[0], i1944.src)
  i1944.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[1], i1944.dst)
  i1944.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[2], i1944.op)
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1947 = data
  i1946.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[0], i1946.pass)
  i1946.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[1], i1946.fail)
  i1946.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[2], i1946.zFail)
  i1946.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[3], i1946.comp)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1951 = data
  i1950.name = i1951[0]
  i1950.value = i1951[1]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( i1957[i + 0] );
  }
  i1954.keywords = i1956
  i1954.hasDiscard = !!i1955[1]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1961 = data
  i1960.passId = i1961[0]
  i1960.subShaderIndex = i1961[1]
  var i1963 = i1961[2]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( i1963[i + 0] );
  }
  i1960.keywords = i1962
  i1960.vertexProgram = i1961[3]
  i1960.fragmentProgram = i1961[4]
  i1960.readDepth = !!i1961[5]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'shader')
  i1966.pass = i1967[2]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.type = i1971[1]
  i1970.value = new pc.Vec4( i1971[2], i1971[3], i1971[4], i1971[5] )
  i1970.textureValue = i1971[6]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1973 = data
  i1972.name = i1973[0]
  request.r(i1973[1], i1973[2], 0, i1972, 'texture')
  i1972.aabb = i1973[3]
  i1972.vertices = i1973[4]
  i1972.triangles = i1973[5]
  i1972.textureRect = UnityEngine.Rect.MinMaxRect(i1973[6], i1973[7], i1973[8], i1973[9])
  i1972.packedRect = UnityEngine.Rect.MinMaxRect(i1973[10], i1973[11], i1973[12], i1973[13])
  i1972.border = new pc.Vec4( i1973[14], i1973[15], i1973[16], i1973[17] )
  i1972.transparency = i1973[18]
  i1972.bounds = i1973[19]
  i1972.pixelsPerUnit = i1973[20]
  i1972.textureWidth = i1973[21]
  i1972.textureHeight = i1973[22]
  i1972.nativeSize = new pc.Vec2( i1973[23], i1973[24] )
  i1972.pivot = new pc.Vec2( i1973[25], i1973[26] )
  i1972.textureRectOffset = new pc.Vec2( i1973[27], i1973[28] )
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.wrapMode = i1975[1]
  i1974.isLooping = !!i1975[2]
  i1974.length = i1975[3]
  var i1977 = i1975[4]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1977[i + 0]) );
  }
  i1974.curves = i1976
  var i1979 = i1975[5]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1979[i + 0]) );
  }
  i1974.events = i1978
  i1974.halfPrecision = !!i1975[6]
  i1974.frameRate = i1975[7]
  i1974.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1975[8], i1974.localBounds)
  i1974.hasMuscleCurves = !!i1975[9]
  var i1981 = i1975[10]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( i1981[i + 0] );
  }
  i1974.clipMuscleConstant = i1980
  i1974.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1975[11], i1974.clipBindingConstant)
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1985 = data
  i1984.path = i1985[0]
  i1984.componentType = i1985[1]
  i1984.property = i1985[2]
  i1984.keys = i1985[3]
  var i1987 = i1985[4]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1987[i + 0]) );
  }
  i1984.objectReferenceKeys = i1986
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1991 = data
  i1990.time = i1991[0]
  request.r(i1991[1], i1991[2], 0, i1990, 'value')
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1995 = data
  i1994.functionName = i1995[0]
  i1994.floatParameter = i1995[1]
  i1994.intParameter = i1995[2]
  i1994.stringParameter = i1995[3]
  request.r(i1995[4], i1995[5], 0, i1994, 'objectReferenceParameter')
  i1994.time = i1995[6]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1997 = data
  i1996.center = new pc.Vec3( i1997[0], i1997[1], i1997[2] )
  i1996.extends = new pc.Vec3( i1997[3], i1997[4], i1997[5] )
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2001 = data
  var i2003 = i2001[0]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( i2003[i + 0] );
  }
  i2000.genericBindings = i2002
  var i2005 = i2001[1]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( i2005[i + 0] );
  }
  i2000.pptrCurveMapping = i2004
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.ascent = i2007[1]
  i2006.originalLineHeight = i2007[2]
  i2006.fontSize = i2007[3]
  var i2009 = i2007[4]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2009[i + 0]) );
  }
  i2006.characterInfo = i2008
  request.r(i2007[5], i2007[6], 0, i2006, 'texture')
  i2006.originalFontSize = i2007[7]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2013 = data
  i2012.index = i2013[0]
  i2012.advance = i2013[1]
  i2012.bearing = i2013[2]
  i2012.glyphWidth = i2013[3]
  i2012.glyphHeight = i2013[4]
  i2012.minX = i2013[5]
  i2012.maxX = i2013[6]
  i2012.minY = i2013[7]
  i2012.maxY = i2013[8]
  i2012.uvBottomLeftX = i2013[9]
  i2012.uvBottomLeftY = i2013[10]
  i2012.uvBottomRightX = i2013[11]
  i2012.uvBottomRightY = i2013[12]
  i2012.uvTopLeftX = i2013[13]
  i2012.uvTopLeftY = i2013[14]
  i2012.uvTopRightX = i2013[15]
  i2012.uvTopRightY = i2013[16]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2015 = data
  i2014.name = i2015[0]
  var i2017 = i2015[1]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2017[i + 0]) );
  }
  i2014.states = i2016
  var i2019 = i2015[2]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2019[i + 0]) );
  }
  i2014.layers = i2018
  var i2021 = i2015[3]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2021[i + 0]) );
  }
  i2014.parameters = i2020
  i2014.animationClips = i2015[4]
  i2014.HasSubStateMachines = !!i2015[5]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2025 = data
  i2024.cycleOffset = i2025[0]
  i2024.cycleOffsetParameter = i2025[1]
  i2024.cycleOffsetParameterActive = !!i2025[2]
  i2024.mirror = !!i2025[3]
  i2024.mirrorParameter = i2025[4]
  i2024.mirrorParameterActive = !!i2025[5]
  i2024.motionId = i2025[6]
  i2024.nameHash = i2025[7]
  i2024.fullPathHash = i2025[8]
  i2024.speed = i2025[9]
  i2024.speedParameter = i2025[10]
  i2024.speedParameterActive = !!i2025[11]
  i2024.tag = i2025[12]
  i2024.name = i2025[13]
  i2024.layer = i2025[14]
  i2024.writeDefaultValues = !!i2025[15]
  var i2027 = i2025[16]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2027[i + 0]) );
  }
  i2024.transitions = i2026
  var i2029 = i2025[17]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 2, i2028, '')
  }
  i2024.behaviours = i2028
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2033 = data
  i2032.fullPath = i2033[0]
  i2032.canTransitionToSelf = !!i2033[1]
  i2032.duration = i2033[2]
  i2032.exitTime = i2033[3]
  i2032.hasExitTime = !!i2033[4]
  i2032.hasFixedDuration = !!i2033[5]
  i2032.interruptionSource = i2033[6]
  i2032.offset = i2033[7]
  i2032.orderedInterruption = !!i2033[8]
  i2032.destinationStateNameHash = i2033[9]
  i2032.destinationStateMachineId = i2033[10]
  i2032.isExit = !!i2033[11]
  i2032.mute = !!i2033[12]
  i2032.solo = !!i2033[13]
  var i2035 = i2033[14]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2035[i + 0]) );
  }
  i2032.conditions = i2034
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2039 = data
  i2038.mode = i2039[0]
  i2038.parameter = i2039[1]
  i2038.threshold = i2039[2]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2045 = data
  i2044.blendingMode = i2045[0]
  i2044.defaultWeight = i2045[1]
  i2044.name = i2045[2]
  i2044.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2045[3], i2044.stateMachine)
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2047 = data
  i2046.id = i2047[0]
  i2046.defaultStateNameHash = i2047[1]
  var i2049 = i2047[2]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2049[i + 0]) );
  }
  i2046.entryTransitions = i2048
  var i2051 = i2047[3]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2051[i + 0]) );
  }
  i2046.anyStateTransitions = i2050
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2055 = data
  i2054.destinationStateNameHash = i2055[0]
  i2054.destinationStateMachineId = i2055[1]
  i2054.isExit = !!i2055[2]
  i2054.mute = !!i2055[3]
  i2054.solo = !!i2055[4]
  var i2057 = i2055[5]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2057[i + 0]) );
  }
  i2054.conditions = i2056
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2061 = data
  i2060.defaultBool = !!i2061[0]
  i2060.defaultFloat = i2061[1]
  i2060.defaultInt = i2061[2]
  i2060.name = i2061[3]
  i2060.nameHash = i2061[4]
  i2060.type = i2061[5]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.bytes64 = i2063[1]
  i2062.data = i2063[2]
  return i2062
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2065 = data
  i2064.hashCode = i2065[0]
  request.r(i2065[1], i2065[2], 0, i2064, 'material')
  i2064.materialHashCode = i2065[3]
  request.r(i2065[4], i2065[5], 0, i2064, 'atlas')
  i2064.normalStyle = i2065[6]
  i2064.normalSpacingOffset = i2065[7]
  i2064.boldStyle = i2065[8]
  i2064.boldSpacing = i2065[9]
  i2064.italicStyle = i2065[10]
  i2064.tabSize = i2065[11]
  i2064.m_Version = i2065[12]
  i2064.m_SourceFontFileGUID = i2065[13]
  request.r(i2065[14], i2065[15], 0, i2064, 'm_SourceFontFile_EditorRef')
  request.r(i2065[16], i2065[17], 0, i2064, 'm_SourceFontFile')
  i2064.m_AtlasPopulationMode = i2065[18]
  i2064.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2065[19], i2064.m_FaceInfo)
  var i2067 = i2065[20]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('UnityEngine.TextCore.Glyph', i2067[i + 0]));
  }
  i2064.m_GlyphTable = i2066
  var i2069 = i2065[21]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.add(request.d('TMPro.TMP_Character', i2069[i + 0]));
  }
  i2064.m_CharacterTable = i2068
  var i2071 = i2065[22]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 2) {
  request.r(i2071[i + 0], i2071[i + 1], 2, i2070, '')
  }
  i2064.m_AtlasTextures = i2070
  i2064.m_AtlasTextureIndex = i2065[23]
  i2064.m_IsMultiAtlasTexturesEnabled = !!i2065[24]
  i2064.m_ClearDynamicDataOnBuild = !!i2065[25]
  var i2073 = i2065[26]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('UnityEngine.TextCore.GlyphRect', i2073[i + 0]));
  }
  i2064.m_UsedGlyphRects = i2072
  var i2075 = i2065[27]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.add(request.d('UnityEngine.TextCore.GlyphRect', i2075[i + 0]));
  }
  i2064.m_FreeGlyphRects = i2074
  i2064.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2065[28], i2064.m_fontInfo)
  i2064.m_AtlasWidth = i2065[29]
  i2064.m_AtlasHeight = i2065[30]
  i2064.m_AtlasPadding = i2065[31]
  i2064.m_AtlasRenderMode = i2065[32]
  var i2077 = i2065[33]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('TMPro.TMP_Glyph', i2077[i + 0]));
  }
  i2064.m_glyphInfoList = i2076
  i2064.m_KerningTable = request.d('TMPro.KerningTable', i2065[34], i2064.m_KerningTable)
  i2064.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2065[35], i2064.m_FontFeatureTable)
  var i2079 = i2065[36]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 1, i2078, '')
  }
  i2064.fallbackFontAssets = i2078
  var i2081 = i2065[37]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 1, i2080, '')
  }
  i2064.m_FallbackFontAssetTable = i2080
  i2064.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2065[38], i2064.m_CreationSettings)
  var i2083 = i2065[39]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('TMPro.TMP_FontWeightPair', i2083[i + 0]) );
  }
  i2064.m_FontWeightTable = i2082
  var i2085 = i2065[40]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('TMPro.TMP_FontWeightPair', i2085[i + 0]) );
  }
  i2064.fontWeights = i2084
  return i2064
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2087 = data
  i2086.m_FaceIndex = i2087[0]
  i2086.m_FamilyName = i2087[1]
  i2086.m_StyleName = i2087[2]
  i2086.m_PointSize = i2087[3]
  i2086.m_Scale = i2087[4]
  i2086.m_LineHeight = i2087[5]
  i2086.m_AscentLine = i2087[6]
  i2086.m_CapLine = i2087[7]
  i2086.m_MeanLine = i2087[8]
  i2086.m_Baseline = i2087[9]
  i2086.m_DescentLine = i2087[10]
  i2086.m_SuperscriptOffset = i2087[11]
  i2086.m_SuperscriptSize = i2087[12]
  i2086.m_SubscriptOffset = i2087[13]
  i2086.m_SubscriptSize = i2087[14]
  i2086.m_UnderlineOffset = i2087[15]
  i2086.m_UnderlineThickness = i2087[16]
  i2086.m_StrikethroughOffset = i2087[17]
  i2086.m_StrikethroughThickness = i2087[18]
  i2086.m_TabWidth = i2087[19]
  return i2086
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2091 = data
  i2090.m_Index = i2091[0]
  i2090.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2091[1], i2090.m_Metrics)
  i2090.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2091[2], i2090.m_GlyphRect)
  i2090.m_Scale = i2091[3]
  i2090.m_AtlasIndex = i2091[4]
  return i2090
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2093 = data
  i2092.m_Width = i2093[0]
  i2092.m_Height = i2093[1]
  i2092.m_HorizontalBearingX = i2093[2]
  i2092.m_HorizontalBearingY = i2093[3]
  i2092.m_HorizontalAdvance = i2093[4]
  return i2092
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2095 = data
  i2094.m_X = i2095[0]
  i2094.m_Y = i2095[1]
  i2094.m_Width = i2095[2]
  i2094.m_Height = i2095[3]
  return i2094
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.TMP_Character' )
  var i2099 = data
  i2098.m_ElementType = i2099[0]
  i2098.m_Unicode = i2099[1]
  i2098.m_GlyphIndex = i2099[2]
  i2098.m_Scale = i2099[3]
  return i2098
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2104 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2105 = data
  i2104.Name = i2105[0]
  i2104.PointSize = i2105[1]
  i2104.Scale = i2105[2]
  i2104.CharacterCount = i2105[3]
  i2104.LineHeight = i2105[4]
  i2104.Baseline = i2105[5]
  i2104.Ascender = i2105[6]
  i2104.CapHeight = i2105[7]
  i2104.Descender = i2105[8]
  i2104.CenterLine = i2105[9]
  i2104.SuperscriptOffset = i2105[10]
  i2104.SubscriptOffset = i2105[11]
  i2104.SubSize = i2105[12]
  i2104.Underline = i2105[13]
  i2104.UnderlineThickness = i2105[14]
  i2104.strikethrough = i2105[15]
  i2104.strikethroughThickness = i2105[16]
  i2104.TabWidth = i2105[17]
  i2104.Padding = i2105[18]
  i2104.AtlasWidth = i2105[19]
  i2104.AtlasHeight = i2105[20]
  return i2104
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2108 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2109 = data
  i2108.id = i2109[0]
  i2108.x = i2109[1]
  i2108.y = i2109[2]
  i2108.width = i2109[3]
  i2108.height = i2109[4]
  i2108.xOffset = i2109[5]
  i2108.yOffset = i2109[6]
  i2108.xAdvance = i2109[7]
  i2108.scale = i2109[8]
  return i2108
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.KerningTable' )
  var i2111 = data
  var i2113 = i2111[0]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(request.d('TMPro.KerningPair', i2113[i + 0]));
  }
  i2110.kerningPairs = i2112
  return i2110
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.KerningPair' )
  var i2117 = data
  i2116.xOffset = i2117[0]
  i2116.m_FirstGlyph = i2117[1]
  i2116.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2117[2], i2116.m_FirstGlyphAdjustments)
  i2116.m_SecondGlyph = i2117[3]
  i2116.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2117[4], i2116.m_SecondGlyphAdjustments)
  i2116.m_IgnoreSpacingAdjustments = !!i2117[5]
  return i2116
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2118 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2119 = data
  var i2121 = i2119[0]
  var i2120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2121[i + 0]));
  }
  i2118.m_GlyphPairAdjustmentRecords = i2120
  return i2118
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2124 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2125 = data
  i2124.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2125[0], i2124.m_FirstAdjustmentRecord)
  i2124.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2125[1], i2124.m_SecondAdjustmentRecord)
  i2124.m_FeatureLookupFlags = i2125[2]
  return i2124
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2129 = data
  i2128.sourceFontFileName = i2129[0]
  i2128.sourceFontFileGUID = i2129[1]
  i2128.pointSizeSamplingMode = i2129[2]
  i2128.pointSize = i2129[3]
  i2128.padding = i2129[4]
  i2128.packingMode = i2129[5]
  i2128.atlasWidth = i2129[6]
  i2128.atlasHeight = i2129[7]
  i2128.characterSetSelectionMode = i2129[8]
  i2128.characterSequence = i2129[9]
  i2128.referencedFontAssetGUID = i2129[10]
  i2128.referencedTextAssetGUID = i2129[11]
  i2128.fontStyle = i2129[12]
  i2128.fontStyleModifier = i2129[13]
  i2128.renderMode = i2129[14]
  i2128.includeFontFeatures = !!i2129[15]
  return i2128
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2132 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'regularTypeface')
  request.r(i2133[2], i2133[3], 0, i2132, 'italicTypeface')
  return i2132
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2134 = root || request.c( 'TMPro.TMP_Settings' )
  var i2135 = data
  i2134.m_enableWordWrapping = !!i2135[0]
  i2134.m_enableKerning = !!i2135[1]
  i2134.m_enableExtraPadding = !!i2135[2]
  i2134.m_enableTintAllSprites = !!i2135[3]
  i2134.m_enableParseEscapeCharacters = !!i2135[4]
  i2134.m_EnableRaycastTarget = !!i2135[5]
  i2134.m_GetFontFeaturesAtRuntime = !!i2135[6]
  i2134.m_missingGlyphCharacter = i2135[7]
  i2134.m_warningsDisabled = !!i2135[8]
  request.r(i2135[9], i2135[10], 0, i2134, 'm_defaultFontAsset')
  i2134.m_defaultFontAssetPath = i2135[11]
  i2134.m_defaultFontSize = i2135[12]
  i2134.m_defaultAutoSizeMinRatio = i2135[13]
  i2134.m_defaultAutoSizeMaxRatio = i2135[14]
  i2134.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2135[15], i2135[16] )
  i2134.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2135[17], i2135[18] )
  i2134.m_autoSizeTextContainer = !!i2135[19]
  i2134.m_IsTextObjectScaleStatic = !!i2135[20]
  var i2137 = i2135[21]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2134.m_fallbackFontAssets = i2136
  i2134.m_matchMaterialPreset = !!i2135[22]
  request.r(i2135[23], i2135[24], 0, i2134, 'm_defaultSpriteAsset')
  i2134.m_defaultSpriteAssetPath = i2135[25]
  i2134.m_enableEmojiSupport = !!i2135[26]
  i2134.m_MissingCharacterSpriteUnicode = i2135[27]
  i2134.m_defaultColorGradientPresetsPath = i2135[28]
  request.r(i2135[29], i2135[30], 0, i2134, 'm_defaultStyleSheet')
  i2134.m_StyleSheetsResourcePath = i2135[31]
  request.r(i2135[32], i2135[33], 0, i2134, 'm_leadingCharacters')
  request.r(i2135[34], i2135[35], 0, i2134, 'm_followingCharacters')
  i2134.m_UseModernHangulLineBreakingRules = !!i2135[36]
  return i2134
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2139 = data
  i2138.m_GlyphIndex = i2139[0]
  i2138.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2139[1], i2138.m_GlyphValueRecord)
  return i2138
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2140 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2141 = data
  i2140.m_XPlacement = i2141[0]
  i2140.m_YPlacement = i2141[1]
  i2140.m_XAdvance = i2141[2]
  i2140.m_YAdvance = i2141[3]
  return i2140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('TMPro.TMP_Style', i2145[i + 0]));
  }
  i2142.m_StyleList = i2144
  return i2142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.TMP_Style' )
  var i2149 = data
  i2148.m_Name = i2149[0]
  i2148.m_HashCode = i2149[1]
  i2148.m_OpeningDefinition = i2149[2]
  i2148.m_ClosingDefinition = i2149[3]
  i2148.m_OpeningTagArray = i2149[4]
  i2148.m_ClosingTagArray = i2149[5]
  i2148.m_OpeningTagUnicodeArray = i2149[6]
  i2148.m_ClosingTagUnicodeArray = i2149[7]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2153[i + 0]) );
  }
  i2150.files = i2152
  i2150.componentToPrefabIds = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2157 = data
  i2156.path = i2157[0]
  request.r(i2157[1], i2157[2], 0, i2156, 'unityObject')
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2159 = data
  var i2161 = i2159[0]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2161[i + 0]) );
  }
  i2158.scriptsExecutionOrder = i2160
  var i2163 = i2159[1]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2163[i + 0]) );
  }
  i2158.sortingLayers = i2162
  var i2165 = i2159[2]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2165[i + 0]) );
  }
  i2158.cullingLayers = i2164
  i2158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2159[3], i2158.timeSettings)
  i2158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2159[4], i2158.physicsSettings)
  i2158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2159[5], i2158.physics2DSettings)
  i2158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2159[6], i2158.qualitySettings)
  i2158.enableRealtimeShadows = !!i2159[7]
  i2158.enableAutoInstancing = !!i2159[8]
  i2158.enableDynamicBatching = !!i2159[9]
  i2158.lightmapEncodingQuality = i2159[10]
  i2158.desiredColorSpace = i2159[11]
  var i2167 = i2159[12]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( i2167[i + 0] );
  }
  i2158.allTags = i2166
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.value = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2175 = data
  i2174.id = i2175[0]
  i2174.name = i2175[1]
  i2174.value = i2175[2]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2179 = data
  i2178.id = i2179[0]
  i2178.name = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2181 = data
  i2180.fixedDeltaTime = i2181[0]
  i2180.maximumDeltaTime = i2181[1]
  i2180.timeScale = i2181[2]
  i2180.maximumParticleTimestep = i2181[3]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2183 = data
  i2182.gravity = new pc.Vec3( i2183[0], i2183[1], i2183[2] )
  i2182.defaultSolverIterations = i2183[3]
  i2182.bounceThreshold = i2183[4]
  i2182.autoSyncTransforms = !!i2183[5]
  i2182.autoSimulation = !!i2183[6]
  var i2185 = i2183[7]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2185[i + 0]) );
  }
  i2182.collisionMatrix = i2184
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.layerId = i2189[1]
  i2188.otherLayerId = i2189[2]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'material')
  i2190.gravity = new pc.Vec2( i2191[2], i2191[3] )
  i2190.positionIterations = i2191[4]
  i2190.velocityIterations = i2191[5]
  i2190.velocityThreshold = i2191[6]
  i2190.maxLinearCorrection = i2191[7]
  i2190.maxAngularCorrection = i2191[8]
  i2190.maxTranslationSpeed = i2191[9]
  i2190.maxRotationSpeed = i2191[10]
  i2190.baumgarteScale = i2191[11]
  i2190.baumgarteTOIScale = i2191[12]
  i2190.timeToSleep = i2191[13]
  i2190.linearSleepTolerance = i2191[14]
  i2190.angularSleepTolerance = i2191[15]
  i2190.defaultContactOffset = i2191[16]
  i2190.autoSimulation = !!i2191[17]
  i2190.queriesHitTriggers = !!i2191[18]
  i2190.queriesStartInColliders = !!i2191[19]
  i2190.callbacksOnDisable = !!i2191[20]
  i2190.reuseCollisionCallbacks = !!i2191[21]
  i2190.autoSyncTransforms = !!i2191[22]
  var i2193 = i2191[23]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2193[i + 0]) );
  }
  i2190.collisionMatrix = i2192
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.layerId = i2197[1]
  i2196.otherLayerId = i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2201[i + 0]) );
  }
  i2198.qualityLevels = i2200
  var i2203 = i2199[1]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2198.names = i2202
  i2198.shadows = i2199[2]
  i2198.anisotropicFiltering = i2199[3]
  i2198.antiAliasing = i2199[4]
  i2198.lodBias = i2199[5]
  i2198.shadowCascades = i2199[6]
  i2198.shadowDistance = i2199[7]
  i2198.shadowmaskMode = i2199[8]
  i2198.shadowProjection = i2199[9]
  i2198.shadowResolution = i2199[10]
  i2198.softParticles = !!i2199[11]
  i2198.softVegetation = !!i2199[12]
  i2198.activeColorSpace = i2199[13]
  i2198.desiredColorSpace = i2199[14]
  i2198.masterTextureLimit = i2199[15]
  i2198.maxQueuedFrames = i2199[16]
  i2198.particleRaycastBudget = i2199[17]
  i2198.pixelLightCount = i2199[18]
  i2198.realtimeReflectionProbes = !!i2199[19]
  i2198.shadowCascade2Split = i2199[20]
  i2198.shadowCascade4Split = new pc.Vec3( i2199[21], i2199[22], i2199[23] )
  i2198.streamingMipmapsActive = !!i2199[24]
  i2198.vSyncCount = i2199[25]
  i2198.asyncUploadBufferSize = i2199[26]
  i2198.asyncUploadTimeSlice = i2199[27]
  i2198.billboardsFaceCameraPosition = !!i2199[28]
  i2198.shadowNearPlaneOffset = i2199[29]
  i2198.streamingMipmapsMemoryBudget = i2199[30]
  i2198.maximumLODLevel = i2199[31]
  i2198.streamingMipmapsAddAllCameras = !!i2199[32]
  i2198.streamingMipmapsMaxLevelReduction = i2199[33]
  i2198.streamingMipmapsRenderersPerFrame = i2199[34]
  i2198.resolutionScalingFixedDPIFactor = i2199[35]
  i2198.streamingMipmapsMaxFileIORequests = i2199[36]
  i2198.currentQualityLevel = i2199[37]
  return i2198
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2206 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2207 = data
  i2206.xPlacement = i2207[0]
  i2206.yPlacement = i2207[1]
  i2206.xAdvance = i2207[2]
  i2206.yAdvance = i2207[3]
  return i2206
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

Deserializers.creativeName = "Test";

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

Deserializers.buildID = "f0d0f8a7-90c0-4f28-9555-2085c5f21955";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

