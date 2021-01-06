import { Cockpit } from 'js-cockpit'
import Demo from './demos/demo'

export default {
  title: 'Demos'
}

function demo(demoClass: any) {
  const cockpitTag = (Cockpit as any)[Symbol.for('tagName')]
  const tagName = demoClass[Symbol.for('tagName')]
  return () => `<${cockpitTag}><${tagName}></${tagName}><${cockpitTag}>`
}

export const combinedDemo = demo(Demo)
