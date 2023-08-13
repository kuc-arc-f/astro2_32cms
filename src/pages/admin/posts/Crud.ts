//import LibCrud from '../../lib/LibCrud';

const Crud = {
  /**
  * 
  * @param
  *
  * @return
  */    
  getQueryString: function () {
    try{
      let ret: any = {id: 0, siteId: 0};
      const queryString = window.location.search;

      // URLSearchParamsを使用してクエリ文字列をパース
      const params = new URLSearchParams(queryString);
    
      // クエリ文字列から特定のパラメータを取得
      const id = params.get('id');
      const siteId = params.get('siteId');  
      ret.id = Number(id);    
      ret.siteId = Number(siteId);    
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getQueryString');
    }
  },
  /**
   * 
   * @param key: any
   *
   * @return
   */
  getInputValues: function() : any
  {
    try{
      const data: any = {};
  
      // inputタグから値を取得し、オブジェクトにセットする
      const title = (<HTMLInputElement>document.querySelector("#title")).value;
      data.title = title;
      
      const content = (<HTMLInputElement>document.querySelector("#content")).value;
      data.content = content;
   
//      const completed = (<HTMLInputElement>document.querySelector("#completed")).checked;
//      data.completed = completed ? 1 : 0;  
      return data;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getInputValues');
    }
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//Crud.startProc();

export default Crud;
