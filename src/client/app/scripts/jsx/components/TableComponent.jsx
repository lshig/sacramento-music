import React from 'react';
import options from '../constants/RawData.jsx';
class TableComponent extends React.Component {
  render() {
    return (
      <section className="data-table">
        <div className="table-container">
          <div className='table-title-container'>
            <div className="table-title">
              <h1 className="table-title-heading">{options.title}</h1>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th data-field="title" className="med-col">song title</th>
                <th data-field="artist" className="med-col">artist</th>
              </tr>
            </thead>
            <tbody>
            {options.data.reverse().map(function(item) {
              return (
                <tr key={item.title.replace(/[^0-9a-z]/gi,'')+'_'+item.artist.replace(/[^0-9a-z]/gi,'')+'_'+item.year}>
                  <td><a target="_blank" href={item.source}>{item.title}</a></td>
                  <td>{item.featureArtist ? item.artist+', '+item.featureArtist : item.artist}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default TableComponent;
