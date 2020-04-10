import React from 'react';
import { Accordion, Icon, Dropdown, Label } from 'semantic-ui-react'
import { Field, Form, Formik, FormikProps } from 'formik';

const MineSiteView = () => {

  const options = [
    { key: 0, text: "Location Information", value: 0 },
    { key: 1, text: "Site Information", value: 1 },
    { key: 2, text: "PAR", value: 2 },
  ];

  //accordion state
  const [activeIndex, setActiveIndex] = React.useState([]);
  const [scrollTarget, setScrollTarget] = React.useState();

  const handleChange = (e, { value }) => {
    console.log('handleChange');
    toggleAccordion(value);
    let accordion = document.querySelectorAll(".accordion .content")[value];
    let bodyTop = document.getElementsByTagName('body')[0].offsetHeight;
    //accordion.scrollIntoView();
    window.scrollTo(0, accordion.offsetTop - bodyTop);
    
    setScrollTarget(value)

    // try{
    // accordion.scrollIntoView();
    // } catch(error) {
    //   debugger
    // }
  };
  const toggleAccordion = (value) => {
    // console.log('toggleAccordion');
    // console.log(activeIndex);
    let newActiveIndex;
    if (activeIndex.includes(value)) {
      let tempArr = [...activeIndex];
      let spliceStart = tempArr.indexOf(value);
      tempArr.splice(spliceStart, 1);
      newActiveIndex = tempArr;
    } else {
      newActiveIndex = [...activeIndex, value];
    }

    setActiveIndex(newActiveIndex);
  };
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    toggleAccordion(index);
  };



  return(
    <div>
      <Dropdown
        floating
        text="Navigate"
        className="link item"
        onChange={handleChange}
        options={options}
        placeholder="Navigate"
        selection
        value={scrollTarget}
      />

      <Accordion >
        <Accordion.Title index={0} onClick={handleClick}>
          <Icon name="dropdown" />
              Location Information
          </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(0)}>
          <Label htmlFor="CountyID">County</Label>
        </Accordion.Content>
        <Accordion.Title index={1} onClick={handleClick}>
          <Icon name="dropdown" />
              City Information
          </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(1)}>
          <Label htmlFor="CityID">City</Label>
        </Accordion.Content>
        <Accordion.Title index={2} onClick={handleClick}>
          <Icon name="dropdown" />
              State Information
          </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(2)}>
          <Label htmlFor="StateID">State</Label>
        </Accordion.Content>
      </Accordion>
    </div>
  )

}

export default MineSiteView;