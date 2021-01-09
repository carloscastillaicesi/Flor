import React, { createContext, Component } from "react";

export const SettingContext = createContext();


class SettingContextProvider extends Component {

 state = {
  fullScreenMode: '',
  modal: false,
  modalMessage: 0,
  modalType: 0,
  contactId: ""
 }
 toggleFullscreen = (e) => {
  this.setState({ fullScreenMode: e })
 }
 toggleModal = () => {
  this.setState({ modalAnimation: !this.state.modalAnimation })
  setTimeout(() => {
   this.setState({ modal: !this.state.modal })
  }, 500);
 }

 toggleModal = () => {

  this.setState({ modal: !this.state.modal })

 }

 setModal = (b) => {
  this.setState({ modal: b })
 }

 setMessage = (option) => {
  this.setState({ modalMessage: option })
 }

 setmodalType = (option) => {
  this.setState({ modalType: option })
 }

 setContactId = (option) => {
  this.setState({ contactId: option })
 }

 render() {
  return (
   <SettingContext.Provider value={{ ...this.state, toggleFullscreen: this.toggleFullscreen, toggleModal: this.toggleModal, setModal: this.setModal, setMessage: this.setMessage, setmodalType: this.setmodalType, setContactId: this.setContactId }}>
    {this.props.children}
   </SettingContext.Provider>
  )
 }
}

export default SettingContextProvider
