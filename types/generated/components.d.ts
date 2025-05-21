import type { Schema, Struct } from '@strapi/strapi';

export interface ParagraphWorkPhase extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_work_phases';
  info: {
    displayName: 'Work phase';
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
      'paragraph.work-phase': ParagraphWorkPhase;
    }
  }
}
