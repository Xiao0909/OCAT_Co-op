import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => { await AssessmentService.submit(data); };
  const { handleSubmit, register } = useForm();
  // const onSubmit = (data) => console.log(data);

  return <Form onSubmit={handleSubmit(onSubmit)}>
    <h1>Cat Behavioral Instrument</h1>
    {/* constant questions */}
    <div>
      <div>
        <p>Cat Name</p>
        <input {...register(`catName`)} placeholder="Cat Name" />
      </div>
      <br />
      <div>
        <p>Cat Date of Birth</p>
        <input {...register(`birth`)} placeholder="00/00/0000" />
      </div>
    </div>
    <hr />
    {/* choice questions */}
    <div>
      <div>
        <p>1. Previous contact with the Cat Judicial System</p>
        <select {...register(`question1`)} >
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div>
        <p>2. Physical altercations with other cats</p>
        <select {...register(`question2`)} >
          <option value="0" >0-3 altercations</option>
          <option value="1">3+ altercations</option>
        </select>
      </div>

      <div>
        <p>3. Physical altercations with owner(scratching, biting, etc...</p>
        <select {...register(`question3`)} >
          <option value="1">10+ altercations</option>
          <option value="0">1-10 altercations</option>
        </select>
      </div>

      <div>
        <p>4. Plays well with dogs</p>
        <select {...register(`question4`)} >
          <option value="1">No</option>
          <option value="0">Yes</option>
        </select>
      </div>

      <div>
        <p>5. Hisses at strangers</p>
        <select {...register(`question5`)} >
          <option value="1">No</option>
          <option value="0">Yes</option>
        </select>
      </div>

    </div>
    <br />
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
