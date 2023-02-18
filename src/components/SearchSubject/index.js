import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import { getAllSubject } from "./../../apis/tutors";

class SearchSubject extends Component {
  constructor() {
    super();

    this.state = {
      subject: "",
      Allsubject: [],
      searchMode: false,
    };
  }

  componentDidMount = () => {
    getAllSubject()
      .then((res) =>
        this.setState({
          Allsubject: res.data,
          loader: false,
        })
      )
      .catch((err) => console.log(err));
  };

  componentDidUpdate = (prevProps) => {
    return this.props.subjectValue &&
      prevProps.subjectValue !== this.props.subjectValue
      ? this.setState({
          subject: this.props.subjectValue,
        })
      : "";
  };

  onSubjectSearch = (subjectTxt) => {
    const { Allsubject } = this.state;
    let filterSub = [];
    Object.keys(Allsubject).map((parantSub, index) => {
      Object.keys(Allsubject[parantSub]).map((childSub, index) => {
        if (childSub.indexOf(subjectTxt.target.value.toLowerCase()) !== -1) {
          filterSub.push(childSub);
          Allsubject[parantSub][childSub].map((level) =>
            filterSub.push(`${childSub} (${level})`)
          );
        }
      });
    });
    subjectTxt.target.value
      ? this.setState({
          filterSub,
          subject: subjectTxt.target.value,
          searchMode: true,
        })
      : this.setState({
          filterSub: [],
          subject: subjectTxt.target.value,
          searchMode: false,
        });
  };
  onSelectSub = (sub) => {
    this.setState({
      filterSub: [],
      searchMode: false,
    });
    this.props.getSubjectValue(sub);
  };
  render() {
    const { subject, filterSub, searchMode } = this.state;

    return (
      <div style={{ position: "absolute" }}>
        <FormControl
          type="text"
          className="form-control truncate"
          placeholder="search your subject"
          onChange={this.onSubjectSearch}
          value={subject}
          onClick={this.props?.onClick}
        />
        {searchMode ? (
          filterSub?.length ? (
            <div className="serachsub-div">
              {filterSub.length
                ? filterSub.map((sub) => {
                    return (
                      <div
                        className="sub-child"
                        onClick={() => this.onSelectSub(sub)}
                      >
                        {sub}
                      </div>
                    );
                  })
                : ""}
            </div>
          ) : (
            <div className="serachsub-div flex-center-center">no data</div>
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchSubject;
