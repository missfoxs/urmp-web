<template>
  <div class="entInfoManage">
    <div class="searchBar">
      <el-form :inline="true" :model="searchData" size="mini" label-width="100px">
        <el-form-item label="关联企业ID">
          <el-input v-model="searchData.affiliatedEnterpriseId"></el-input>
        </el-form-item>
        <el-form-item label="关联企业名称">
          <el-input v-model="searchData.affiliatedEnterpriseName"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchData.state">
            <el-option value="0">全部</el-option>
            <el-option value="1">启用</el-option>
            <el-option value="2">停用</el-option>
          </el-select>
        </el-form-item>
        <br />
        <template v-if="expend">
        <el-form-item label="审批负责人">
          <el-input v-model="searchData.shenpi"></el-input>
        </el-form-item>
        <el-form-item label="云接入负责人">
          <el-input v-model="searchData.yunjieru"></el-input>
        </el-form-item>
        <el-form-item label="VOS负责人">
          <el-input v-model="searchData.vos"></el-input>
        </el-form-item>
        <el-form-item label="关系人">
          <el-input v-model="searchData.guanxi"></el-input>
        </el-form-item>
        </template>
      </el-form>
      <div class="searchHandle">
        <span class="searchItem" @click="handleSearch" style="border-bottom: 1px solid white">
          <i class="el-icon-search"></i>
        </span>
        <span class="searchItem" @click="handleClear">
          <i class="el-icon-refresh"></i>
        </span>
      </div>
    </div>
    <div class="flexible" @click="handleFlexible">
      <i :class="{'el-icon-arrow-down': !expend, 'el-icon-arrow-up': expend}"></i>
    </div>
    <div class="main">
      <div class="handleBar">
        <AddIcon @click.native="handleAdd"></AddIcon>
        <EditIcon @click.native="handleEdit"></EditIcon>
        <EnableIcon @click.native="handleEnable"></EnableIcon>
        <DisableIcon @click.native="handleDisable"></DisableIcon>
      </div>
      <div class="contentTable">
        <el-table
          ref="entInfoTable"
          :data="entInfoData"
          @selection-change="handleSelectionChange"
          size="small"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="序号">
            <template slot-scope="scope">{{ scope.row.affiliatedEnterpriseId }}</template>
          </el-table-column>
          <el-table-column label="关联企业ID">
            <template slot-scope="scope">{{ scope.row.affiliatedEnterpriseId }}</template>
          </el-table-column>
          <el-table-column label="关联企业名称">
            <template slot-scope="scope">{{ scope.row.affiliatedEnterpriseName }}</template>
          </el-table-column>
          <el-table-column label="企业数量">
            <template slot-scope="scope">{{ scope.row.enterpriseCount }}</template>
          </el-table-column>
          <el-table-column label="企业信息">
            <template slot-scope="scope">{{ scope.row.enterpriseInfo }}</template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">{{ scope.row.status }}</template>
          </el-table-column>
          <el-table-column label="审批负责人">
            <template slot-scope="scope">{{ scope.row.shenpi }}</template>
          </el-table-column>
          <el-table-column label="云接入负责人">
            <template slot-scope="scope">{{ scope.row.yunjieru }}</template>
          </el-table-column>
          <el-table-column label="VOS负责人">
            <template slot-scope="scope">{{ scope.row.vos }}</template>
          </el-table-column>
          <el-table-column label="关系人">
            <template slot-scope="scope">{{ scope.row.guanxiren }}</template>
          </el-table-column>
        </el-table>
      </div>
    <AddEnt></AddEnt>
    </div>
  </div>
</template>

<script>
import Util from '../Util';
import AddEnt from './AddEnt';
export default {
    components: {
        AddEnt
    },
  data() {
    return {
      form: { name: "sss" },
      searchData: {
        affiliatedEnterpriseId: "1111111",
        affiliatedEnterpriseName: "哈哈哈",
        state: "",
        yunjieru: "",
        vos: "",
        guanxi: ""
      },
      entInfoData: [
        {
          affiliatedEnterpriseId: "20001000",
          affiliatedEnterpriseName: "智慧营销",
          enterpriseCount: 10,
          enterpriseInfo: "1000001,1000002",
          status: 1, // 1启用，0停用
          shenpi: "admin",
          yunjieru: "admin",
          vos: "admin",
          guanxiren: "admin",
          principalRela: [
            {
              userAccount: "",
              affiliatedEnterpriseId: "",
              principalType: 0
            }
          ]
        },
        {
          affiliatedEnterpriseId: "20001000",
          affiliatedEnterpriseName: "智慧营销",
          enterpriseCount: 10,
          enterpriseInfo: "1000001,1000002",
          status: 1, // 1启用，0停用
          shenpi: "admin",
          yunjieru: "admin",
          vos: "admin",
          guanxiren: "admin"
        }
      ],
      expend: true,
    //   searchBarHeight: "auto",
      selectedEnt: []
    };
  },
  created() {
    //this.fetchEntInfo();
  },
  methods: {
    // 初始化获取数据
    fetchEntInfo() {
        Util.AjaxHelper({
            url: 'entInfo',
            methods: 'get'
        })
        .then(res=>{
            this.entInfoData = res.data.obj;
        })
    },
    handleSelectionChange(val) {
      console.log(val);
      this.selectedEnt = val;
    },
    handleAdd() {
      console.log("add");
    },
    handleEdit() {
        console.log("edit");
        if(this.selectedEnt.length !== 1) {
            console.log('请选择一个企业信息进行编辑');
        }
    },
    handleEnable() {
        if(this.selectedEnt.length === 0) {
            console.log('请至少选择一个企业信息启用');
        }
    },
    handleDisable() {
        if(this.selectedEnt.length === 0) {
            console.log('请至少选择一个企业信息停用');
        }
    },
    handleSearch() {
      console.log(this.searchData.affiliatedEnterpriseId);
    },
    handleClear() {
      this.searchData = {};
    },
    handleFlexible() {
    //   if (this.expend) {
    //     this.searchBarHeight = "30px";
    //   } else {
    //     this.searchBarHeight = "auto";
    //   }
      this.expend = !this.expend;
    }
  }
};
</script>
<style lang="less">
.searchBar {
  background-color: white;
  padding-top: 20px;
  border: 1px solid #e9e9e9;
  position: relative;
  overflow: hidden;
  .searchHandle {
    position: absolute;
    width: 30px;
    right: 0;
    top: 0;
    height: 100%;
    .searchItem {
      background-color: #242e3b;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
    }
  }
}
.flexible {
  width: 100%;
  height: 15px;
  background-color: #e9e9e9;
  text-align: center;
  cursor: pointer;
  bottom: 0;
  margin-bottom: 10px;
}
.contentTable {
  margin-top: 10px;
}
.icon {
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
}
</style>