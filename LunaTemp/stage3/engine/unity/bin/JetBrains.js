/**
 * @compiler Bridge.NET 17.9.35-luna
 */
Bridge.assembly("JetBrains", function ($asm, globals) {
    "use strict";

    /*JetBrains.Annotations.AssertionConditionType start.*/
    Bridge.define("JetBrains.Annotations.AssertionConditionType", {
        $kind: 6,
        statics: {
            fields: {
                IS_TRUE: 0,
                IS_FALSE: 1,
                IS_NULL: 2,
                IS_NOT_NULL: 3
            }
        }
    });
    /*JetBrains.Annotations.AssertionConditionType end.*/

    /*JetBrains.Annotations.CollectionAccessType start.*/
    Bridge.define("JetBrains.Annotations.CollectionAccessType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Read: 1,
                ModifyExistingContent: 2,
                UpdatedContent: 6
            }
        }
    });
    /*JetBrains.Annotations.CollectionAccessType end.*/

    /*JetBrains.Annotations.ImplicitUseKindFlags start.*/
    Bridge.define("JetBrains.Annotations.ImplicitUseKindFlags", {
        $kind: 6,
        statics: {
            fields: {
                Default: 7,
                Access: 1,
                Assign: 2,
                InstantiatedWithFixedConstructorSignature: 4,
                InstantiatedNoFixedConstructorSignature: 8
            }
        }
    });
    /*JetBrains.Annotations.ImplicitUseKindFlags end.*/

    /*JetBrains.Annotations.ImplicitUseTargetFlags start.*/
    Bridge.define("JetBrains.Annotations.ImplicitUseTargetFlags", {
        $kind: 6,
        statics: {
            fields: {
                Default: 1,
                Itself: 1,
                Members: 2,
                WithMembers: 3
            }
        }
    });
    /*JetBrains.Annotations.ImplicitUseTargetFlags end.*/
});
