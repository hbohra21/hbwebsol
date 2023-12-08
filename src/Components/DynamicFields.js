import React from 'react';

const DynamicFields = ({ answerType, fields, onFieldChange, onAddField, onRemoveField, showAdd }) => {
    return (
        <div className='dynamicFieldsContainer'>
            {fields.map((field, index) => (
                <div key={index} className='dynamicField'>
                    {/* <h3>Option {index + 1}</h3> */}
                    {answerType === 'Number' && (
                        <>
                            <h3>Option {index + 1}</h3>
                            <label>
                                Number:
                                <input
                                    type="number"
                                    value={field.number || ''}
                                    onChange={(e) => onFieldChange(index, 'number', e.target.value)}

                                />
                            </label>
                            <label>
                                Min:
                                <input
                                    type="number"
                                    value={field.min || ''}
                                    onChange={(e) => onFieldChange(index, 'min', e.target.value)}
                                />
                            </label>
                            <label>
                                Max:
                                <input
                                    type="number"
                                    value={field.max || ''}
                                    onChange={(e) => onFieldChange(index, 'max', e.target.value)}
                                />
                            </label>
                            <label>
                                Steps:
                                <input
                                    type="number"
                                    value={field.step || ''}
                                    onChange={(e) => onFieldChange(index, 'step', e.target.value)}
                                />
                            </label>
                        </>
                    )}
                    {answerType === 'Textarea' && (
                        <>
                            <h3>Option {index + 1}</h3>
                            <label>
                                Number:
                                <input
                                    type="text"
                                    value={field.number || ''}
                                    onChange={(e) => onFieldChange(index, 'number', e.target.value)}
                                />
                            </label>
                            <label>
                                Min:
                                <input
                                    type="number"
                                    value={field.min || ''}
                                    onChange={(e) => onFieldChange(index, 'min', e.target.value)}
                                />
                            </label>
                            <label>
                                Max:
                                <input
                                    type="number"
                                    value={field.max || ''}
                                    onChange={(e) => onFieldChange(index, 'max', e.target.value)}
                                />
                            </label>
                            <label>
                                Rows:
                                <input
                                    type="number"
                                    value={field.row || ''}
                                    onChange={(e) => onFieldChange(index, 'row', e.target.value)}
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
                                    onChange={(e) => onFieldChange(index, 'options', e.target.value)}
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
                                    onChange={(e) => onFieldChange(index, 'radioOptions', e.target.value)}
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
                                    onChange={(e) => onFieldChange(index, 'checkboxOptions', e.target.value)}
                                />
                            </label>
                        </>
                    )}
                    {answerType === 'Slider' && (
                        <>      <h3>Option {index + 1}</h3>
                            <label>
                                Slider Range:
                                <input
                                    type="number"
                                    value={field.sliderRange || ''}
                                    onChange={(e) => onFieldChange(index, 'sliderRange', e.target.value)}
                                />
                            </label>
                            <label>
                                Min:
                                <input
                                    type="number"
                                    value={field.min || ''}
                                    onChange={(e) => onFieldChange(index, 'min', e.target.value)}
                                />
                            </label>
                            <label>
                                Max:
                                <input
                                    type="number"
                                    value={field.max || ''}
                                    onChange={(e) => onFieldChange(index, 'max', e.target.value)}
                                />
                            </label>
                        </>
                    )}
                    {/* Add similar blocks for other answer types */}
                    {showAdd && <button type="button" onClick={() => onRemoveField(index)} className='removeButton'>
                        -
                    </button>}
                </div>
            ))}
            {showAdd && <button type="button" onClick={onAddField} className='addButton'>
                +
            </button>}
        </div>
    );
};

export default DynamicFields;
