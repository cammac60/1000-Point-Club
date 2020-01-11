import React from 'react';
import { Link } from 'react-router-dom';

import './CheatSheet.scss';

export const CheatSheet = () => {
  return (
    <div className="cheat-sheet-wrap">
      <Link to="/" className="cheat-sheet-back">Back to login</Link>
      <h3 className="cheat-sheet-title">Notable active players:</h3>
      <table className="cheat-sheet-tbl">
        <tr className="cheat-tbl-row">
          <th className="cheat-tbl-header">ID</th>
          <th className="cheat-tbl-header">Name</th>
          <th className="cheat-tbl-header">Current Team</th>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477038</td>
          <td className="cheat-tbl-data">Nikita Gusev</td>
          <td className="cheat-tbl-data">NJD</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8480002</td>
          <td className="cheat-tbl-data">Nico Hischier</td>
          <td className="cheat-tbl-data">NJD</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474586</td>
          <td className="cheat-tbl-data">Jordan Eberle</td>
          <td className="cheat-tbl-data">NYI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475314</td>
          <td className="cheat-tbl-data">Anders Lee</td>
          <td className="cheat-tbl-data">NYI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8476459</td>
          <td className="cheat-tbl-data">Mika Zibanejad</td>
          <td className="cheat-tbl-data">NYR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8481554</td>
          <td className="cheat-tbl-data">Kaapo Kakko</td>
          <td className="cheat-tbl-data">NYR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8473512</td>
          <td className="cheat-tbl-data">Claude Giroux</td>
          <td className="cheat-tbl-data">PHI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474161</td>
          <td className="cheat-tbl-data">Jakub Voracek</td>
          <td className="cheat-tbl-data">PHI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471675</td>
          <td className="cheat-tbl-data">Sidney Crosby</td>
          <td className="cheat-tbl-data">PIT</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471215</td>
          <td className="cheat-tbl-data">Evgeni Malkin</td>
          <td className="cheat-tbl-data">PIT</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477956</td>
          <td className="cheat-tbl-data">David Pastrnak</td>
          <td className="cheat-tbl-data">BOS</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8470638</td>
          <td className="cheat-tbl-data">Patrice Bergeron</td>
          <td className="cheat-tbl-data">BOS</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478403</td>
          <td className="cheat-tbl-data">Jack Eichel</td>
          <td className="cheat-tbl-data">BUF</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475784</td>
          <td className="cheat-tbl-data">Jeff Skinner</td>
          <td className="cheat-tbl-data">BUF</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477503</td>
          <td className="cheat-tbl-data">Max Domi</td>
          <td className="cheat-tbl-data">MTL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8469454</td>
          <td className="cheat-tbl-data">Ilya Kovalchuk</td>
          <td className="cheat-tbl-data">MTL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478469</td>
          <td className="cheat-tbl-data">Thomas Chabot</td>
          <td className="cheat-tbl-data">OTT</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8480801</td>
          <td className="cheat-tbl-data">Brady Tkachuk</td>
          <td className="cheat-tbl-data">OTT</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8479318</td>
          <td className="cheat-tbl-data">Auston Matthews</td>
          <td className="cheat-tbl-data">TOR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478483</td>
          <td className="cheat-tbl-data">Mitch Marner</td>
          <td className="cheat-tbl-data">TOR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8468508</td>
          <td className="cheat-tbl-data">Justin Williams</td>
          <td className="cheat-tbl-data">CAR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478427</td>
          <td className="cheat-tbl-data">Sebastian Aho</td>
          <td className="cheat-tbl-data">CAR</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8476456</td>
          <td className="cheat-tbl-data">Jonathan Huberdeau</td>
          <td className="cheat-tbl-data">FLA</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477493</td>
          <td className="cheat-tbl-data">Alexander Barkov</td>
          <td className="cheat-tbl-data">FLA</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8476453</td>
          <td className="cheat-tbl-data">Nikita Kucherov</td>
          <td className="cheat-tbl-data">TBL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474564</td>
          <td className="cheat-tbl-data">Steven Stamkos</td>
          <td className="cheat-tbl-data">TBL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471214</td>
          <td className="cheat-tbl-data">Alex Ovechkin</td>
          <td className="cheat-tbl-data">WSH</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471698</td>
          <td className="cheat-tbl-data">T.J. Oshie</td>
          <td className="cheat-tbl-data">WSH</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474141</td>
          <td className="cheat-tbl-data">Patrick Kane</td>
          <td className="cheat-tbl-data">CHI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8479337</td>
          <td className="cheat-tbl-data">Alex Debrincat</td>
          <td className="cheat-tbl-data">CHI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477946</td>
          <td className="cheat-tbl-data">Dylan Larkin</td>
          <td className="cheat-tbl-data">DET</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8480821</td>
          <td className="cheat-tbl-data">Filip Zadina</td>
          <td className="cheat-tbl-data">DET</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475168</td>
          <td className="cheat-tbl-data">Matt Duchene</td>
          <td className="cheat-tbl-data">NSH</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478042</td>
          <td className="cheat-tbl-data">Victor Arvidsson</td>
          <td className="cheat-tbl-data">NSH</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475158</td>
          <td className="cheat-tbl-data">Ryan O'Reilly</td>
          <td className="cheat-tbl-data">STL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474565</td>
          <td className="cheat-tbl-data">Alex Pietrangelo</td>
          <td className="cheat-tbl-data">STL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8479314</td>
          <td className="cheat-tbl-data">Matthew Tkachuk</td>
          <td className="cheat-tbl-data">CGY</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8476346</td>
          <td className="cheat-tbl-data">Johnny Gaudreau</td>
          <td className="cheat-tbl-data">CGY</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477492</td>
          <td className="cheat-tbl-data">Nathan MacKinnon</td>
          <td className="cheat-tbl-data">COL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8480069</td>
          <td className="cheat-tbl-data">Cale Makar</td>
          <td className="cheat-tbl-data">COL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478402</td>
          <td className="cheat-tbl-data">Connor McDavid</td>
          <td className="cheat-tbl-data">EDM</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8477934</td>
          <td className="cheat-tbl-data">Leon Draisaitl</td>
          <td className="cheat-tbl-data">EDM</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8480012</td>
          <td className="cheat-tbl-data">Elias Pettersson</td>
          <td className="cheat-tbl-data">VAN</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478444</td>
          <td className="cheat-tbl-data">Brock Boeser</td>
          <td className="cheat-tbl-data">VAN</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8470612</td>
          <td className="cheat-tbl-data">Ryan Getzlaf</td>
          <td className="cheat-tbl-data">ANA</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8478131</td>
          <td className="cheat-tbl-data">Ondrej Kase</td>
          <td className="cheat-tbl-data">ANA</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8473994</td>
          <td className="cheat-tbl-data">Jamie Benn</td>
          <td className="cheat-tbl-data">DAL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475794</td>
          <td className="cheat-tbl-data">Tyler Seguin</td>
          <td className="cheat-tbl-data">DAL</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471685</td>
          <td className="cheat-tbl-data">Anze Kopitar</td>
          <td className="cheat-tbl-data">LAK</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474563</td>
          <td className="cheat-tbl-data">Drew Doughty</td>
          <td className="cheat-tbl-data">LAK</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8470613</td>
          <td className="cheat-tbl-data">Brent Burns</td>
          <td className="cheat-tbl-data">SJS</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8476881</td>
          <td className="cheat-tbl-data">Tomas Hertl</td>
          <td className="cheat-tbl-data">SJS</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474715</td>
          <td className="cheat-tbl-data">Cam Atkinson</td>
          <td className="cheat-tbl-data">CBJ</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8473422</td>
          <td className="cheat-tbl-data">Nick Foligno</td>
          <td className="cheat-tbl-data">CBJ</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8469459</td>
          <td className="cheat-tbl-data">Mikko Koivu</td>
          <td className="cheat-tbl-data">MIN</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8470595</td>
          <td className="cheat-tbl-data">Eric Staal</td>
          <td className="cheat-tbl-data">MIN</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8473548</td>
          <td className="cheat-tbl-data">Phil Kessel</td>
          <td className="cheat-tbl-data">ARI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8475791</td>
          <td className="cheat-tbl-data">Taylor Hall</td>
          <td className="cheat-tbl-data">ARI</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8471669</td>
          <td className="cheat-tbl-data">Paul Stastny</td>
          <td className="cheat-tbl-data">VGK</td>
        </tr>
        <tr className="cheat-tbl-row">
          <td className="cheat-tbl-data">8474157</td>
          <td className="cheat-tbl-data">Max Pacioretty</td>
          <td className="cheat-tbl-data">VGK</td>
        </tr>
      </table>
    </div>
  )
};
