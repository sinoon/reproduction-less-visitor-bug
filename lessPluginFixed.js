module.exports = class LessAliasesPlugin {
    install(less, pluginManager) {
        class Visitor extends less.visitors.Visitor {
            constructor(options) {
                super()
                this._visitor = new less.visitors.Visitor(this)
                this.isPreEvalVisitor = true
                this.isReplacing = true

                this.config = options.config
                this.stdinDir = options.stdinDir
            }
            run(root) {
                return this._visitor.visit(root)
            }
            visitMixinDefinition(node) {
                if (Array.isArray(node.rules)) {
                    return node
                }

                node.rules = [node.rules]

                return node
            }
            visitMixinDefinitionOut(node) {
                if (Array.isArray(node.rules) && node.rules.length === 1) {
                    node.rules = node.rules[0]
                    return node
                }

                return node
            }
        }

        pluginManager.addVisitor(new Visitor({}))
    }
}
