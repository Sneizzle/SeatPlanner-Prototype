import { IComponent } from "../component.h";



export abstract class Entity {



    public GetComponent<C extends IComponent>(constr: { new(...args: any[]): C }): C {

        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C
            }
        }
        throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`)

    
    protected _components: IComponent[] = []


    public get Components(): IComponent[] {
        return this._components
    }




    // --- ADD --- //
    public AddComponent(component: IComponent): void {
        this._components.push(component)
        component.Entity = this
    }


}
    // --- ADD --- //
}