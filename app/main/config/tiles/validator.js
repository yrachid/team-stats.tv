module.exports = (ajv, schema) => configuration => new Promise((resolve, reject) => {

  const validator = ajv.compile(schema);

  const isValid = validator(configuration);

  if (!isValid) {
    const errorMessages = validator
      .errors
      .map(error => `${error.dataPath} ${error.message}`)
      .join('; ');

    return reject(
      new Error(`Failed to parse configuration: \n ${errorMessages}`)
    );
  }

  return resolve(configuration);

});
