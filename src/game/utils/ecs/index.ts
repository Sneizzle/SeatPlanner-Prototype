export * from './entity'
export * from '../component.h'

import { IComponent } from '../component.h'

export abstract class Entity {
  protected _components: IComponent[] = []


  public get Components(): IComponent[] {
    return this._components
  }

  public AddComponent(component: IComponent): void {
    this._components.push(component)
    component.Entity = this
  }
}