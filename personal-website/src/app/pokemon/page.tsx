import Banner from "@/elements/banner";
import styles from "./page.module.css";
import SmogonContribs from "@/elements/smogon-contribs";

// TODO: recolor top row of table, make github link a button like other pages
// Add HGPL win? think of any managing but probably it

export default function Research() {
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        <section>
          <SmogonContribs />
        </section>
        <section>
          <h2>Tournament Wins</h2>
          <h3>Individual Wins</h3>
          <table className={styles.tournamentTable}>
            <thead>
              <tr>
                <th>Tournament</th>
                <th>Format</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCUU Cup V</td>
                <td>Gen 9 Little Cup UU</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/lcuu-cup-v-double-elim-50-prize-won-by-bleahey.3761309/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
              <tr>
                <td>ROA Spotlight Tournament</td>
                <td>Gen 1 Little Cup</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/roa-spotlight-tournament-rby-lc-won-by-bleahey.3764287/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Team Tournament Wins</h3>
          <table className={styles.tournamentTable}>
            <thead>
              <tr>
                <th>Tournament</th>
                <th>Format</th>
                <th>Team Name</th>
                <th>Custom Avatar Prize</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LLL5</td>
                <td>Gen 9 Little Cup UU</td>
                <td>Transmasculins</td>
                <td>—</td>
                <td>
                  <a
                    href="https://docs.google.com/spreadsheets/d/155B2__YJ2RE7WAC0MZvkkFnJg2JFp69K828E63dQNJ0/edit?gid=0#gid=0"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sheet
                  </a>
                </td>
              </tr>
              <tr>
                <td>LPL 12</td>
                <td>Gen 9 Little Cup</td>
                <td>Sleepytime Slakoths</td>
                <td>—</td>
                <td>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1UlHZFX_3FblO-Nw4JTgoyphM_-gojGSL-XsnYt8I3QU/edit?gid=0#gid=0"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sheet
                  </a>
                </td>
              </tr>
              <tr>
                <td>PTPL VI</td>
                <td>Gen 9 Little Cup</td>
                <td>Dazzling Diancies</td>
                <td>
                  <img
                    src="https://www.smogon.com/forums/attachments/ptplvidazzlingdiancies-png.696148/"
                    alt="PTPL Custom Avatar"
                    className={styles.avatarImage}
                  />
                </td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/ptpl-vi-final-won-by-dazzling-diancies.3754757/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
              <tr>
                <td>SSPL III</td>
                <td>Gen 8 Little Cup</td>
                <td>Lele Sserafim</td>
                <td>
                  <img
                    src="https://www.smogon.com/forums/attachments/1759570430333-png.776402/"
                    alt="SSPL Custom Avatar"
                    className={styles.avatarImage}
                  />
                </td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/sspl-iii-finals-won-by-lele-sserafim.3769964/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
              <tr>
                <td>HGPL III</td>
                <td>Everything under the sun</td>
                <td>Gangster Garchomps</td>
                <td>—</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/hgpl-iii-grand-finale-won-by-gangster-garchomps.3737724/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Managing Wins</h3>
          <table className={styles.tournamentTable}>
            <thead>
              <tr>
                <th>Tournament</th>
                <th>Co-Manager</th>
                <th>Team Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCSL III</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/members/envy.652748/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Envy
                  </a>
                </td>
                <td>Skibidigletts</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/lcsl-iii-finals.3748907/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
              <tr>
                <td>LCSCL IV</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/members/envy.652748/"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Envy
                  </a>
                </td>
                <td>Babyboyswablus</td>
                <td>
                  <a
                    href="https://www.smogon.com/forums/threads/lcsl-iv-finals-won-by-babyboyswablus.3767535/#post-10622252"
                    className={styles.pokemonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Thread
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
