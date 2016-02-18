using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Model
{
    public class DBFFileReader
    {
        private int NumberResultByPage = 10;

        #region Cumas

        public DataTable GetCumasFileData()
        {
            // http://www.connectionstrings.com/dbf-foxpro/
            // http://stackoverflow.com/questions/22361457/c-sharp-read-from-dbf-files-into-a-datatable
            // http://www.codeproject.com/Articles/24247/Load-a-DBF-into-a-DataTable
            // https://msdn.microsoft.com/en-us/library/system.data.oledb.oledbconnection(v=vs.110).aspx
            // http://stackoverflow.com/questions/11356878/get-data-in-a-dbf-file-using-c-sharp

            DataTable resultData = new DataTable();

            using (OleDbConnection connectionHandler = new OleDbConnection(
            @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\diogo.marques\Downloads\Newest version\Newest version\Newest version\SALONMAN CURRENT\;Extended Properties=dBASE IV"))
            {
                // Open the connection, and if open successfully, you can try to query it
                connectionHandler.Open();

                if (connectionHandler.State == ConnectionState.Open)
                {
                    string mySQL = "select * from Cumas";  // dbf table name

                    OleDbCommand MyQuery = new OleDbCommand(mySQL, connectionHandler);
                    OleDbDataAdapter DA  = new OleDbDataAdapter(MyQuery);

                    DA.Fill(resultData);

                    var databaseName  = connectionHandler.Database;
                    var serverVersion = connectionHandler.ServerVersion;
                    var site          = connectionHandler.Site;
                    var schema        = connectionHandler.GetSchema();
                    var container     = connectionHandler.Container;

                    connectionHandler.Close();
                }

                return resultData;
            }
        }

        public DataTable GetCumasByPage(int page)
        {
            if(page <= 0)
            {
                return new DataTable();
            }

            var startIndex = ((page - 1) * NumberResultByPage) + 1; // make sure when page 1 we start with index 1, ...
            var endIndex   = startIndex + NumberResultByPage; // make sure we return the correct number of results

            string mySQL = "select * from Cumas";  // dbf table name
            var dataTable = GetData(mySQL);

            var dt = new DataTable();
            DataColumn[] dca = new DataColumn[dataTable.Columns.Count];
            dataTable.Columns.CopyTo(dca, 0);
            dt.Columns.AddRange(dca);

            var count = dataTable.Rows.Count;
            for (; startIndex < endIndex; startIndex++)
            {
                if(count > startIndex)
                {
                    dt.Rows.Add(dataTable.Rows[startIndex]);
                }                
            }

            return dt;
        }

        public DataTable GetCUSTNO(string custno)
        {
            string mySQL = string.Format("select * from Cumas where CUSTNO = '{0}'", custno);  // dbf table name

            return GetData(mySQL);
        }

        #endregion

        #region CUTRN

        public DataTable GetCUTRN_All()
        {
            string mySQL = string.Format("select * from CUTRN");  // dbf table name

            return GetData(mySQL);
        }

        public DataTable GetCUTRN(string custno)
        {
            string mySQL = string.Format("select * from CUTRN  where CUSTNO = '{0}'", custno);  // dbf table name

            return GetData(mySQL);
        }

        #endregion

        #region ZTRAN

        public DataTable GetZTRAN(string custno)
        {
            string mySQL = string.Format("select * from ZTRAN  where CUSTNO = '{0}'", custno);  // dbf table name

            return GetData(mySQL);
        }

        public DataTable GetZTRAN_All()
        {
            string mySQL = string.Format("select * from ZTRAN");  // dbf table name

            return GetData(mySQL);
        }

        #endregion

        private DataTable GetData(string queryString)
        {
            DataTable resultData = new DataTable();

            using (OleDbConnection connectionHandler = new OleDbConnection(
            @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\diogo.marques\Downloads\Newest version\Newest version\Newest version\SALONMAN CURRENT\;Extended Properties=dBASE IV"))
            {
                // Open the connection, and if open successfully, you can try to query it
                connectionHandler.Open();

                if (connectionHandler.State == ConnectionState.Open)
                {
                    OleDbCommand MyQuery = new OleDbCommand(queryString, connectionHandler);
                    OleDbDataAdapter DA  = new OleDbDataAdapter(MyQuery);

                    DA.Fill(resultData);

                    connectionHandler.Close();
                }

                return resultData;
            }
        }
    }
}
