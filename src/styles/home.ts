import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 140,
    marginTop: 20
  },

  header: {
    width: '100%',
    marginTop: 20,
  },

  eventName: {
    color: '#f5f5f5',
    fontSize: 28,
    fontWeight: 'bold',
  },

  eventDate: {
    color: '#737373',
    fontSize: 16
  },

  eventDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#525252',
  },

  descriptionContainer: {
    marginTop: 12,
    backgroundColor: '#292524',
    padding: 16
  },

  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },

  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  after: {
    backgroundColor: '#31cf67',
    marginRight: 12,
    width: 4,
    height: '100%',
  },

  container: {
    width: '100%',
  },

  form: {
    
  },

  input: {
    backgroundColor: '#292524',
    color: '#f5f5f5',
    height: 56,
    borderRadius: 4,
    padding: 20,
    marginTop: 12
  },

  placeholder: {
    fontSize: 20,
    color: '#6b6b6b'
  },

  button: {
    borderWidth: 1,
    borderColor: '#31cf67',
    borderBottomWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    flexDirection: 'row',
    paddingBottom: 18,
    paddingTop: 18
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginLeft: 18,

  }

});

export default styles;
