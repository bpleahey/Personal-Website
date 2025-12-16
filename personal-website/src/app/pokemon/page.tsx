import Banner from "@/elements/banner";
import styles from "./page.module.css";
import SmogonContribs from "@/elements/smogon-contribs";
import ExternalLink from "@/elements/ExternalLink";

export default function Research() {
  //TODO:fix table sizing for tournament tables and smogon contribution tables
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
                <td data-label="Tournament">LCUU Cup V</td>
                <td data-label="Format">Gen 9 Little Cup UU</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/lcuu-cup-v-double-elim-50-prize-won-by-bleahey.3761309/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">ROA Spotlight Tournament</td>
                <td data-label="Format">Gen 1 Little Cup</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/roa-spotlight-tournament-rby-lc-won-by-bleahey.3764287/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
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
                <td data-label="Tournament">LLL5</td>
                <td data-label="Format">Gen 9 Little Cup UU</td>
                <td data-label="Team Name">Transmasculins</td>
                <td data-label="Custom Avatar Prize">—</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://docs.google.com/spreadsheets/d/155B2__YJ2RE7WAC0MZvkkFnJg2JFp69K828E63dQNJ0/edit?gid=0#gid=0"
                    className={styles.pokemonLink}
                  >
                    View Sheet
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">LPL 12</td>
                <td data-label="Format">Gen 9 Little Cup</td>
                <td data-label="Team Name">Sleepytime Slakoths</td>
                <td data-label="Custom Avatar Prize">—</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://docs.google.com/spreadsheets/d/1UlHZFX_3FblO-Nw4JTgoyphM_-gojGSL-XsnYt8I3QU/edit?gid=0#gid=0"
                    className={styles.pokemonLink}
                  >
                    View Sheet
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">PTPL VI</td>
                <td data-label="Format">Gen 9 Little Cup</td>
                <td data-label="Team Name">Dazzling Diancies</td>
                <td data-label="Custom Avatar Prize">
                  <img
                    src="https://www.smogon.com/forums/attachments/ptplvidazzlingdiancies-png.696148/"
                    alt="PTPL Custom Avatar"
                    className={styles.avatarImage}
                  />
                </td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/ptpl-vi-final-won-by-dazzling-diancies.3754757/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">UMPL V</td>
                <td data-label="Format">Gen 8 NFE</td>
                <td data-label="Team Name">Mane Remover</td>
                <td data-label="Custom Avatar Prize">
                  <img
                    src="https://cdn.simplystamps.com/media/catalog/product/1/6/16499-coming-soon-banner-craft-stamp-hcb.png"
                    alt="Coming soon..."
                    className={styles.avatarImage}
                  />
                </td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/umpl-v-finals-won-by-mane-remover.3774007/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">SSPL III</td>
                <td data-label="Format">Gen 8 Little Cup</td>
                <td data-label="Team Name">Lele Sserafim</td>
                <td data-label="Custom Avatar Prize">
                  <img
                    src="https://www.smogon.com/forums/attachments/1759570430333-png.776402/"
                    alt="SSPL Custom Avatar"
                    className={styles.avatarImage}
                  />
                </td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/sspl-iii-finals-won-by-lele-sserafim.3769964/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">HGPL III</td>
                <td data-label="Format">Everything</td>
                <td data-label="Team Name">Gangster Garchomps</td>
                <td data-label="Custom Avatar Prize">—</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/hgpl-iii-grand-finale-won-by-gangster-garchomps.3737724/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
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
                <td data-label="Tournament">LCSL III</td>
                <td data-label="Co-Manager">
                  <ExternalLink
                    href="https://www.smogon.com/forums/members/envy.652748/"
                    className={styles.pokemonLink}
                  >
                    Envy
                  </ExternalLink>
                </td>
                <td data-label="Team Name">Skibidigletts</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/lcsl-iii-finals.3748907/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">LCSCL IV</td>
                <td data-label="Co-Manager">
                  <ExternalLink
                    href="https://www.smogon.com/forums/members/envy.652748/"
                    className={styles.pokemonLink}
                  >
                    Envy
                  </ExternalLink>
                </td>
                <td data-label="Team Name">Babyboyswablus</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/lcsl-iv-finals-won-by-babyboyswablus.3767535/#post-10622252"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
              <tr>
                <td data-label="Tournament">Euphonos Legacy League</td>
                <td data-label="Co-Manager">
                  <ExternalLink
                    href="https://www.smogon.com/forums/members/the-hisui-region.567777/"
                    className={styles.pokemonLink}
                  >
                    The Hisui Region
                  </ExternalLink>
                </td>
                <td data-label="Team Name">General Lunala</td>
                <td data-label="Link">
                  <ExternalLink
                    href="https://www.smogon.com/forums/threads/euphonos-legacy-league-finals-won-by-general-lunala.3763535/"
                    className={styles.pokemonLink}
                  >
                    View Thread
                  </ExternalLink>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
