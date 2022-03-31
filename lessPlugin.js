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
        }

        pluginManager.addVisitor(new Visitor({}))
    }
}
