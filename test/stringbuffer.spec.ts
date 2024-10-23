import * as chai from "chai";

const { expect, assert } = chai;
import { 
    StringBuffer,
} from  '../src/index';

describe ('StringBuffer Tests', () => {

    it ('StringBuffer', () => {
      let sb = new StringBuffer();
      sb.append('Four score');
      sb.append(' ');
      sb.append('and seven years ago.');
      expect(sb.toString()).eq('Four score and seven years ago.');
  
      sb.clear();
      expect(sb.toString()).eq('');
  
      sb = new StringBuffer('Four score ');
      sb.append('and seven years ago.');
      expect(sb.toString()).eq('Four score and seven years ago.');
  
      // can pass in non-Strings?
      sb = new StringBuffer(1);
      sb.append(2);
      expect(sb.toString()).eq('12');
    })
  
    it ('StringBuffer Set', () => {
        const sb = new StringBuffer('foo');
        sb.set('bar');
        expect(sb.toString()).eq('bar');
    })
  
    it ('StringBuffer Multi Append', () => {
        let sb = new StringBuffer('hey', 'foo');
        sb.append('bar', 'baz');
        expect(sb.toString()).eq('heyfoobarbaz');
    
        sb = new StringBuffer();
        sb.append(1, 2);
        // should not add up to '3'
        expect(sb.toString()).eq('12');
    })
  
    it ('StringBuffer toString', () => {
        const sb = new StringBuffer('foo', 'bar');
        expect(sb.toString()).eq('foobar');
    })
  
    it ('StringBuffer with false First Argument', () => {
        let sb = new StringBuffer(0, 'more');
        expect(sb.toString()).eq('0more');
    
        sb = new StringBuffer(false, 'more');
        expect(sb.toString()).eq('falsemore');
    
        sb = new StringBuffer('', 'more');
        expect(sb.toString()).eq('more');
    
        sb = new StringBuffer(null, 'more');
        expect(sb.toString()).eq('');
    
        sb = new StringBuffer(undefined, 'more');
        expect(sb.toString()).eq('');
    })
    
    it ('StringBuffer getLength', () => {
        const sb = new StringBuffer();
        expect(sb.getLength()).eq(0);
    
        sb.append('foo');
        expect(sb.getLength()).eq(3);
    
        sb.append('baroo');
        expect(sb.getLength()).eq(8);
    
        sb.clear();
        expect(sb.getLength()).eq(0);
    })

  });