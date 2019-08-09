<template>
    <div>
        <div>
            <div>
                <ol>
                    <li v-for="item in pageQuestions">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>{{ item.title }}</span>
                          </div>
                          <div  v-for="a in 6" class="text item">
                            ha
                          </div>

                        </el-card>
                    </li>
                </ol>
            </div>
        </div>

        <div class="myPagination">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="1"
            :pager-count="11"
            layout="prev, pager, next"
            :total="totalPages">
          </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                totalPages: 2,
                questionSize: 0,
                questionPerPage: 10,
                pageQuestions: [],
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
                console.log("this is mytest page");
                this.questionSize = this.$db.get('question').size().value()
                this.totalPages = this.questionSize / this.questionPerPage
                this.pageQuestions = this.$db.get('question').take(this.questionPerPage).sortBy('id').value()
                console.log(this.pageQuestions)
            },
            handleCurrentChange() {

            }
        }
    }
</script>

<style>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>