import {
  Schema, model, models, Document,
} from 'mongoose';

const ProjectsSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    require: false,
  },
}, {
  timestamps: true,
});

export interface IProject extends Document {
  title: string;
  description: string;
  tags: string;
}

export default models.Projects || model<IProject>('Projects', ProjectsSchema);
