class DataType {
  constructor (typeName) {
    this.typeName = typeName;
  }

  getTypeName (typeName) {
    return typeName;
  }

  getValue (val) {
    return val;
  }
}

class ValueDataType extends DataType {
  isPredefined (dataType) {
    return (true | false);
  }

  isUserDefined (dataType) {
    return (true | false);
  }
}

class PointerDataType extends DataType {
  getPointerValue (val) {
    return val;
  }
}

class ReferencesDataType extends DataType {
  isPredefined (dataType) {
    return (true | false);
  }

  getTypeOfPredefined (dataType) {
    return ('Object' | 'String');
  }

  isUserDefined (dataType) {
    return (true | false);
  }
}

