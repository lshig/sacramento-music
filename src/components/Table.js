import React from 'react';
import options from '../data/songs.js';

export default function Table() {
  let tableBody = null;
  tableBody = options.data.reverse().map((song, key) => {
    return (
      <tr key={key}>
        <td>
          <a href={song.source} rel="noopener noreferrer" target="_blank">
            {song.title}
          </a>
        </td>
        <td>
          {song.featureArtist
            ? song.artist + ', ' + song.featureArtist
            : song.artist}
        </td>
      </tr>
    );
  });

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
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </section>
  );
}
