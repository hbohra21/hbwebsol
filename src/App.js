import React, { useState, useEffect } from 'react';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('Text');
  const [fields, setFields] = useState([{}]);
  const [showAdd, setShowAdd] = useState(false)

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerTypeChange = (e) => {
    if (e.target.value == "None") {
      setShowAdd(false)
      setAnswerType(e.target.value);
      setFields([{}]);
    }
    else {
      setShowAdd(true)
      setAnswerType(e.target.value);
      setFields([{}]);
    }
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    setFields(updatedFields);
  };

  const handleAddField = () => {
    setFields([...fields, {}]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const isEmpty = fields.some((field) => {
      return (
        (answerType === 'Number' && (!field.number || !field.min || !field.max || !field.step)) ||
        (answerType === 'Textarea' && (!field.number || !field.min || !field.max || !field.row)) ||
        (answerType === 'Dropdown' && !field.options) ||
        (answerType === 'Radio' && !field.radioOptions) ||
        (answerType === 'Checkbox' && !field.checkboxOptions) ||
        (answerType === 'Slider' && (!field.sliderRange || !field.min || !field.max))
      );
    });

    if (isEmpty) {
      alert('Please fill in all fields before submitting.');
    } else {
      alert('Submit Succesfully.');
      setQuestion('');
      setAnswerType('Text');
      setFields([{}]);
      setShowAdd(false);
      console.log('Question:', question);
      console.log('Answer Type:', answerType);
      console.log('Fields:', fields);
    }
  };


  useEffect(() => {
    setFields([{}]);
  }, []);

  return (
    <div >
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Question:
            <input type="text" value={question} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Answer Type:
            <select value={answerType} onChange={handleAnswerTypeChange}>
              <option value={null}>None</option>
              <option value="Textarea">Textarea</option>
              <option value="Number">Number</option>
              <option value="Dropdown">Dropdown</option>
              <option value="Radio">Radio</option>
              <option value="Checkbox">Checkbox</option>
              <option value="Slider">Slider</option>
            </select>
          </label>
        </div>
        {fields.map((field, index) => (
          <div key={index}>
            {answerType === 'Number' && (
              <>
                <h3>Option {index + 1}</h3>
                <label>
                  Number:
                  <input
                    type="number"
                    value={field.number || ''}
                    onChange={(e) => handleFieldChange(index, 'number', e.target.value)}
                  />
                </label>
                <label>
                  Min:
                  <input
                    type="number"
                    value={field.min || ''}
                    onChange={(e) => handleFieldChange(index, 'min', e.target.value)}
                  />
                </label>
                <label>
                  Max:
                  <input
                    type="number"
                    value={field.max || ''}
                    onChange={(e) => handleFieldChange(index, 'max', e.target.value)}
                  />
                </label>
                <label>
                  Steps:
                  <input
                    type="number"
                    value={field.step || ''}
                    onChange={(e) => handleFieldChange(index, 'step', e.target.value)}
                  />
                </label>
              </>
            )}
            {answerType === 'Textarea' && (
              <>      <h3>Option {index + 1}</h3>
                <label>
                  Number:
                  <input
                    type="text"
                    value={field.number || ''}
                    onChange={(e) => handleFieldChange(index, 'number', e.target.value)}
                  />
                </label>
                <label>
                  Min:
                  <input
                    type="number"
                    value={field.min || ''}
                    onChange={(e) => handleFieldChange(index, 'min', e.target.value)}
                  />
                </label>
                <label>
                  Max:
                  <input
                    type="number"
                    value={field.max || ''}
                    onChange={(e) => handleFieldChange(index, 'max', e.target.value)}
                  />
                </label>
                <label>
                  Rows:
                  <input
                    type="number"
                    value={field.row || ''}
                    onChange={(e) => handleFieldChange(index, 'row', e.target.value)}
                  />
                </label>
              </>
            )}
            {answerType === 'Dropdown' && (
              <>      <h3>Option {index + 1}</h3>
                <label>
                  Options:
                  <input
                    type="text"
                    value={field.options || ''}
                    onChange={(e) => handleFieldChange(index, 'options', e.target.value)}
                  />
                </label>
              </>
            )}
            {answerType === 'Radio' && (
              <>      <h3>Option {index + 1}</h3>
                <label>
                  Radio Options:
                  <input
                    type="text"
                    value={field.radioOptions || ''}
                    onChange={(e) => handleFieldChange(index, 'radioOptions', e.target.value)}
                  />
                </label>
              </>
            )}
            {answerType === 'Checkbox' && (
              <>      <h3>Option {index + 1}</h3>
                <label>
                  Checkbox Options:
                  <input
                    type="text"
                    value={field.checkboxOptions || ''}
                    onChange={(e) => handleFieldChange(index, 'checkboxOptions', e.target.value)}
                  />
                </label>
              </>
            )}
            {answerType === 'Slider' && (
              <>      <h3>Option {index + 1}</h3>
                <label>
                  Slider Range:
                  <input
                    type="text"
                    value={field.sliderRange || ''}
                    onChange={(e) => handleFieldChange(index, 'sliderRange', e.target.value)}
                  />
                </label>
                <label>
                  Min:
                  <input
                    type="number"
                    value={field.min || ''}
                    onChange={(e) => handleFieldChange(index, 'min', e.target.value)}
                  />
                </label>
                <label>
                  Max:
                  <input
                    type="number"
                    value={field.max || ''}
                    onChange={(e) => handleFieldChange(index, 'max', e.target.value)}
                  />
                </label>
              </>
            )}
            {fields.length > 1 && (
              <button type="button" onClick={() => handleRemoveField(index)} style={{ "marginLeft": "5px" }}>
                -
              </button>
            )}
          </div>
        ))}
        {showAdd && <button type="button" onClick={handleAddField} style={{ "marginBottom": "5px" }}>
          +
        </button>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
