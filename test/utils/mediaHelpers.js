import chai from 'chai';
import { describe, it } from 'mocha';
import { findLongestPreviewDuration } from '../../src/server/utils/mediaHelpers.js';

const expect = chai.expect;
const assert = chai.assert;

describe('mediaHelpers', () => {
  describe('findLongestPreviewDuration', () => {
    it('should return undefined if param is not an array', () => {
      expect(findLongestPreviewDuration(null)).to.be.an('undefined');
      expect(findLongestPreviewDuration(undefined)).to.be.an('undefined');
      expect(findLongestPreviewDuration({})).to.be.an('undefined');
      expect(findLongestPreviewDuration('')).to.be.an('undefined');
      expect(findLongestPreviewDuration('foo')).to.be.an('undefined');
      expect(findLongestPreviewDuration(123)).to.be.an('undefined');
    });

    it('should return undefined if param array is empty', () => {
      expect(findLongestPreviewDuration([])).to.be.an('undefined');
    });

    it('should return undefined if array has no valid titles', () => {
      const titles = [{
        foo: {
          nid: 1,
          duration: 10
        }
      }, {
        preview: {
          nid: 2,
          duuuuration: 26
        }
      }];
      expect(findLongestPreviewDuration([])).to.be.an('undefined');
    });

    it('should return title with longest preview duration', () => {
      const titles = [{
        preview: {
          nid: 1,
          duration: '10'
        }
      }, {
        preview: {
          nid: 2,
          duration: '25'
        }
      }, {
        preview: {
          nid: 3,
          duration: '30'
        }
      }, {
        preview: {
          nid: 4,
          duration: '18'
        }
      }, {
        preview: {
          nid: 5,
          duration: '4'
        }
      }];

      const actual = findLongestPreviewDuration(titles);
      expect(actual).to.be.an('object');
      expect(actual).to.have.property('preview');

      assert.equal(actual.preview.nid, 3, 'nid of longest title preview matches');
      assert.equal(parseInt(actual.preview.duration, 10), 30, 'duration of longest title preview matches');
    });

    it('should ignore titles with missing or invalid preview duration', () => {
      const titles = [{
        preview: {
          nid: 1,
          duration: null
        }
      }, {
        preview: {
          nid: 2,
          duration: '25'
        }
      }, {
        preview: {
          nid: 3,
          duration: 'p1565'
        }
      }, {
        preview: {
          nid: 4,
          duration: { value: 60 }
        }
      }, {
        preview: {
          nid: 5,
          duration: '90'
        }
      }, {
        preview: {
          nid: 6,
          duration: [{ duration: '200' }]
        }
      }];

      const actual = findLongestPreviewDuration(titles);
      expect(actual).to.be.an('object');
      expect(actual).to.have.property('preview');

      assert.equal(actual.preview.nid, 5, 'nid of longest title preview matches');
      assert.equal(parseInt(actual.preview.duration, 10), 90, 'duration of longest title preview matches');
    });
  });
});
