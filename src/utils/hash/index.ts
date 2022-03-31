import { genSalt, compareSync, hash } from 'bcrypt';

class Hash {
  static saltRounds:number = 10;

  /**
 *
 * create password hash
 * @param {string} password - password
 * @returns {Promise<string>} - hash
 */

  static async create(password: string): Promise<string> {
    const salt = await genSalt(Hash.saltRounds);
    return hash(password, salt);
  }

  /**
   *
   * @param {string} password
   * @param {string} hashText
   * @returns {boolean}
   */
  static compare(password: string, hashText: string): boolean {
    return compareSync(password, hashText);
  }
}

export default Hash;
