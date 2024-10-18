<template>
  <div class="">
    <a-list
      class="mt2 app-list"
      item-layout="vertical"
      size="large"
      :data-source="dataList"
      :loading="loading"
      :grid="{ gutter: 24, column: 4 }"
    >
      <template #renderItem="{ item, index }">
        <a-list-item>
          <a-card hoverable>
            <div class="logo">
              <div class="logo-icon" :style="{...appIconStyles[index % 4], fontSize: /[a-z]/ig.test(item.appName.slice(0, 1)) ? '24px' : '20px'}">
                {{ item.appName.slice(0, 1) }}
              </div>
            </div>
            <div class="info-content">
              <div class="app-item-header">
                <span :title="item.appName" class="app-list-content__name overflow-hidden-one">
                  {{ item.appName }}
                </span>
                <div class="app-item-header__action">
                  <!-- <qrcode-outlined class="app-item-header-icon" /> -->
                  <a class="ml2 text-error" @click="handleDelete(item)">删除 </a>
                </div>
              </div>
              <div class="app-list-content">
                <span
                  :class="[
                    'app-list-content__state',
                    item.publishStatus === 1
                      ? 'publishing'
                      : item.publishStatus === 2
                        ? 'published'
                        : '',
                  ]"
                >
                  {{ item.appEnvName }}{{ item.publishStatusName }}
                  <!-- <s-icon-font
                    v-if="item.publishStatus === 1"
                    type="icon-shuaxin1"
                    class="publishing-icon"
                  /> -->
                </span>
                <a-divider type="vertical" />
                <span class="app-item-header__type-name">{{ item.appTypeName }}</span>
              </div>
            </div>
            <template #actions>
              <span key="edit" class="app-item-button" @click="handleEdit(item)">
                <!-- <s-icon-font class="mr1" type="icon-caozuo-bianji" /> -->
                编辑应用</span>
              <span key="detail" class="app-item-button" @click="handlePush(item)">
                <!-- <s-icon-font
                  :size="16"
                  style="position: relative; top: 1px"
                  class="mr1"
                  type="icon-eye"
                /> -->
                应用详情
              </span>
            </template>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { applyList } from '@/apis/common'

const dataList = ref()
const loading = ref(false)

const router = useRouter()


// 随机背景渐变
const appIconStyles = [
  { background: 'linear-gradient(180deg,#d4cbfc, #8c77ff)' },
  { background: 'linear-gradient(0deg,#4986fe, #91cffe)' },
  { background: 'linear-gradient(180deg,#ffa301 0%, #ffc35a)' },
  { background: 'linear-gradient(180deg,#8e92f5, #5a90eb)' },
]

const getApplyList = async () => {
  loading.value = true
  const res = await applyList()
  console.log(res);
  const { data } = res
  loading.value = false

  dataList.value = data
}

const handleDelete = (item: any) => {
  console.log(item)
  router.push('/zero-code/preview')
}
const handleEdit = (item: any) => {
  console.log(item)
  router.push('/zero-code/preview')
}
const handlePush = (item: any) => {
  console.log(item)
}

onMounted(() => {
  getApplyList()
})
</script>

<style lang='less' scoped>
.search-input {
  width: 250px;
}

.filter-box {
  .filter-type {
    margin-right: 18px;

    label {
      margin-right: 8px;
    }
  }
}

.app-list {
  :deep(.ant-list-item) {
    padding: 0;
    margin-bottom: 20px;
  }

  :deep(.ant-card) {
    background: linear-gradient(180deg, #f5f8ff 0%, #ffffff);
    border-radius: 11px;
    // box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.04);
    // border: none;

    .ant-card-body {
      display: flex;
      padding: 30px;
      padding-top: 35px;

      .logo {
        margin-right: 13px;

        div.logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          font-family: CircleFont;
          justify-content: center;
          color: #fff;
          text-shadow: 0px 1px 3px #0d0d0d57;
        }
      }

      .info-content {
        flex: 1;
        min-width: 0;
      }
    }
  }

  :deep(.ant-card-actions) {
    background: transparent;
    border-top: 1px solid #eaebed;
  }
}

.app-item-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &__action {
    flex: 0 0 40px;
  }

  :deep(.ant-card-body) {
    padding: 20px;
  }
}

.app-list-content {
  display: flex;
  font-size: 12px;
  // color: @gray-text1;
  align-items: center;

  &__state.publishing {
    // color: @primary-color;
  }
  &__state.published {
    color: rgba(10, 191, 91, 0.9);
  }
  .publishing-icon {
    // color: @primary-color;
    animation: Rotate 0.8s infinite linear;
  }
}

.app-item-button {
  // background-color: #f5f8fb;
  // color: @primary-color;
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
