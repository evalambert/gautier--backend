import type { Schema, Struct } from '@strapi/strapi';

export interface WorkPhaseWorkPhase extends Struct.ComponentSchema {
  collectionName: 'components_work_phase_work_phases';
  info: {
    displayName: 'WorkPhase';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Duration: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'work-phase.work-phase': WorkPhaseWorkPhase;
    }
  }
}
