import React from 'react';
import options from '../data/songs.js';

export default function Table() {
  return (
    <section className="table-info">
      <div className="table-container">
        <div className="table-title-wrapper">
          <h1 className="table-title-heading">{options.title}</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th data-field="title" className="med-col">
                song title
              </th>
              <th data-field="artist" className="med-col">
                artist
              </th>
            </tr>
          </thead>
          <tbody>
            {options.data.reverse().map(item => {
              return (
                <tr
                  key={
                    item.title.replace(/[^0-9a-z]/gi, '') +
                    '_' +
                    item.artist.replace(/[^0-9a-z]/gi, '') +
                    '_' +
                    item.year
                  }
                >
                  <td>
                    <a
                      href={item.source}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  </td>
                  <td>
                    {item.featureArtist
                      ? item.artist + ', ' + item.featureArtist
                      : item.artist}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
