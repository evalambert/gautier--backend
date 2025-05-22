import type { Schema, Struct } from '@strapi/strapi';

export interface WorkPhaseWorkPhase extends Struct.ComponentSchema {
  collectionName: 'components_work_phase_work_phases';
  info: {
    description: '';
    displayName: 'WorkPhase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'work-phase.work-phase': WorkPhaseWorkPhase;
    }
  }
}
