import { Cockpit } from 'js-cockpit'
import Demo from './demos/demo'

export default {
  title: 'Demos'
}

function demo(demoClass: any) {
  const cockpitTag = (Cockpit as any).tagName
  const tagName = demoClass.tagName

  return () => `<${cockpitTag}><${tagName}></${tagName}><${cockpitTag}>`
}

export const combinedDemo = demo(Demo)
